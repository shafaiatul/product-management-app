(function(){
    'use strict';
    angular
      .module('productManagement')
      .controller('ProductListCtrl', ProductListCtrl);

      function ProductListCtrl() {
        //when using the controller as syntax, the model is define in 'this' variable
        var vm = this; //vm for view model
        vm.products= [
          {
                "productId": 1,
                "productName": "One Touch Ultra",
                "productCode": "GDN-0011",
                "releaseDate": "March 19, 2009",
                "description": "Leaf rake with 48-inch wooden handle.",
                "cost": 9.00,
                "price": 19.95,
                "category": "garden",
                "tags": ["leaf", "tool"],
                "imageUrl": "http://www5.saveritemedical.com/t/088/020244_ultrateststrips50__96800_std.gif"
            },
            {
                "productId": 2,
                "productName": "True Test",
                "productCode": "GDN-0023",
                "releaseDate": "March 18, 2010",
                "description": "15 gallon capacity rolling garden cart",
                "cost": 20.00,
                "price": 32.99,
                "category": "garden",
                "tags": ["barrow", "cart", "wheelbarrow"],
                "imageUrl": "http://www5.saveritemedical.com/l/479/67-E3H0181___17010_std.jpg"
            }
      ]

        vm.showImage = false;

        vm.toggleImage = function () {
          vm.showImage = !vm.showImage;
        }

      }



}());
