describe('isFromBellville' , function(){
    it('should  returns true if a registration number is for Bellville otherwise returns false' , function(){
        
        assert.equal(isFromBellville('CY 123'), true);
        
    });
    it('should returns true if a registration number is for Bellville otherwise returns false' , function(){
        
        assert.equal(isFromBellville('CJ 123'), false);
        
    });
});