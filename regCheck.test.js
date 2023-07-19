describe('regCheck' , function(){
    it('should return true for registration numbers like this' , function(){
        
        assert.equal(regCheck('DC 55 YU GP', 'GP'), true);
        
    });
    it('should return true for registration numbers like this' , function(){
        
        assert.equal(regCheck('DC 55 YU GP', 'EC'), false);
        
    });
    it('should return true for registration numbers like this' , function(){
        
        assert.equal(regCheck('5566 L', 'L'), true);
    });
        it('should return true for registration numbers like this' , function(){
            assert.equal(regCheck('5566 L', 'M'), false);
        });

        
});