describe('Metacademy controllers', function() {

    beforeEach(module('metacademy'));

    describe('VersusCtrl', function() {
        var ctrl, scope;

        beforeEach(inject(function($controller, $rootScope) {
            scope = $rootScope.$new();
            ctrl = $controller('VersusCtrl', {
                $scope: scope
            });
        }));

        it('should be true', function() {
            expect(true).toBe(true);
        })
    });
});