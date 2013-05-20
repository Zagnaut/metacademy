
require "json"
require 'mechanize'
require 'logger'

class Champion

  def initialize(id)
    @id = id

    agent = Mechanize.new { |agent|
      agent.user_agent_alias = "Mac Safari"
    }
    
    agent.log = Logger.new "mech.log"

    @page = agent.get "http://leagueoflegends.com/champions/#{@id}"

    @name = find_name
    @title = find_title
    @image_url = "http://leagueoflegends.com#{find_image_url}"
    @abilities = find_abilities

  end # def

  def to_json
    {
      "id" => @id,
      "name" => @name,
      "title" => @title,
      "img-url" => @image_url,
      "abilities" => @abilities
    }.to_json
  end
  
  private 
    def find_name 
      @page.search(".page_header_text").inner_text
    end

    def find_title
      @page.search(".champion_title").inner_text
    end

    def find_image_url
      @page.search(".champion_render img").attr("src")
    end

    def find_abilities

      abilities = []

      @page.search(".abilities_table tr").each_with_index do |row, i|
        keys   = [:Q, :W, :E, :Ulti, :Innate]

        icon   = row.search(".ability_icon").attr("src")

        name   = row.search(".ability_name").inner_text
        desc   = row.search(".ability_description").inner_text
        effect = row.search(".ability_effect").inner_text

        stats = row.search(".ability_stats dd")

        cost  = stats.first == nil ? "" : stats.first.inner_text
        range = stats.last  == nil ? "" : stats.last.inner_text

        abilities << {
          _key:   keys[i],
          name:   name,
          icon:   "http://leagueoflegends.com#{icon}",
          desc:   desc,
          effect: effect,
          cost:   cost,
          range:  range
        }
      end

      abilities

    end # def

end # class

file = File.open('data.json', 'w')

ids = [103,84,12,32,34,1,22,53,63,51,69,31,42,122,131,36,119,60,28,81,9,114,105,3,41,86,79,104,120,74,39,40,59,24,126,43,30,38,55,10,85,121,96,7,64,89,117,99,54,90,57,11,21,82,25,267,75,111,76,56,20,2,61,80,78,33,58,107,92,68,13,113,35,98,102,27,14,15,72,37,16,50,134,91,44,17,18,48,23,4,29,77,6,110,67,45,112,8,106,19,62,101,5,83,238,115,26,143]

ids.each do |id|
  file.write Champion.new(id).to_json + ",\n" unless id == 143
  file.write Champion.new(id).to_json + "\n]\n" if id == 143
end

file.close