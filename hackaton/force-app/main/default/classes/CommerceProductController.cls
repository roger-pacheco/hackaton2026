/**
 * @description       : 
 * @author            : Roger Pacheco
 * @group             : 
 * @last modified on  : 04-22-2026
 * @last modified by  : Roger Pacheco
**/
public with sharing class CommerceProductController {
    @AuraEnabled
    public static String getProductStock() {
        List<Product2> prods = [SELECT Id FROM Product2 LIMIT 1];
        return 'In Stock';
    }
}