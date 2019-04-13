import { TestBed, inject } from '@angular/core/testing';
import { MainServiceService } from './main-service.service';
describe('MainServiceService', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [MainServiceService]
        });
    });
    it('should be created', inject([MainServiceService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=main-service.service.spec.js.map