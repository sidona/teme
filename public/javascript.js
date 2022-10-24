const funNumber = (number1, number2) => {
if(number1 > number2) {
  return 'number1 > number2' + number1 + 'number2:'+ number2
} else if(number1<number2) {
  return 'number1 < number2' + number1 + 'number2:'+ number2
} else {
  return 'number1 = number2' + number1 + 'number2:'+ number2
}
}
console.log('funNumber', funNumber(2,8), '9-8', funNumber(9,8), '8-8', funNumber(8,8))


const calculateNumber = (lat1, lat2, lat3) => {
  const checkLat = lat1 === lat2 && lat2 === lat3;
  if(checkLat) {
    return 'echilateral'
  } else if(lat1 === lat2 || lat1 === lat3 || lat2 === lat3) {
    return 'isoscel'
  } else  {
    return 'normal'
  }
}

console.log(calculateNumber(5,5,5))


const orders =[
  {
    "id": 1,
    "products": [
      {
        "id": 59,
        "title": "Spring and summershoes",
        "price": 20,
        "quantity": 3,
        "total": 60,
        "discountPercentage": 8.71,
        "discountedPrice": 55
      },
      {
        "id": 88,
        "title": "TC Reusable Silicone Magic Washing Gloves",
        "price": 29,
        "quantity": 2,
        "total": 58,
        "discountPercentage": 3.19,
        "discountedPrice": 56
      },
      {
        "id": 18,
        "title": "Oil Free Moisturizer 100ml",
        "price": 40,
        "quantity": 2,
        "total": 80,
        "discountPercentage": 13.1,
        "discountedPrice": 70
      },
      {
        "id": 95,
        "title": "Wholesale cargo lashing Belt",
        "price": 930,
        "quantity": 1,
        "total": 930,
        "discountPercentage": 17.67,
        "discountedPrice": 766
      },
      {
        "id": 39,
        "title": "Women Sweaters Wool",
        "price": 600,
        "quantity": 2,
        "total": 1200,
        "discountPercentage": 17.2,
        "discountedPrice": 994
      }
    ],
    "total": 2328,
    "discountedTotal": 1941,
    "userId": 97,
    "totalProducts": 5,
    "totalQuantity": 10
  },
  {
    "id": 2,
    "products": [
      {
        "id": 96,
        "title": "lighting ceiling kitchen",
        "price": 30,
        "quantity": 2,
        "total": 60,
        "discountPercentage": 14.89,
        "discountedPrice": 51
      },
      {
        "id": 91,
        "title": "Black Motorbike",
        "price": 569,
        "quantity": 3,
        "total": 1707,
        "discountPercentage": 13.63,
        "discountedPrice": 1474
      },
      {
        "id": 9,
        "title": "Infinix INBOOK",
        "price": 1099,
        "quantity": 1,
        "total": 1099,
        "discountPercentage": 11.83,
        "discountedPrice": 969
      },
      {
        "id": 16,
        "title": "Hyaluronic Acid Serum",
        "price": 19,
        "quantity": 1,
        "total": 19,
        "discountPercentage": 13.31,
        "discountedPrice": 16
      },
      {
        "id": 54,
        "title": "Pubg Printed Graphic T-Shirt",
        "price": 46,
        "quantity": 3,
        "total": 138,
        "discountPercentage": 16.44,
        "discountedPrice": 115
      }
    ],
    "total": 3023,
    "discountedTotal": 2625,
    "userId": 30,
    "totalProducts": 5,
    "totalQuantity": 10
  },
  {
    "id": 3,
    "products": [
      {
        "id": 37,
        "title": "ank Tops for Womens/Girls",
        "price": 50,
        "quantity": 2,
        "total": 100,
        "discountPercentage": 12.05,
        "discountedPrice": 88
      },
      {
        "id": 80,
        "title": "Chain Pin Tassel Earrings",
        "price": 45,
        "quantity": 3,
        "total": 135,
        "discountPercentage": 17.75,
        "discountedPrice": 111
      },
      {
        "id": 68,
        "title": "Stylish Luxury Digital Watch",
        "price": 57,
        "quantity": 3,
        "total": 171,
        "discountPercentage": 9.03,
        "discountedPrice": 156
      },
      {
        "id": 81,
        "title": "Round Silver Frame Sun Glasses",
        "price": 19,
        "quantity": 1,
        "total": 19,
        "discountPercentage": 10.1,
        "discountedPrice": 17
      },
      {
        "id": 90,
        "title": "Cycle Bike Glow",
        "price": 35,
        "quantity": 1,
        "total": 35,
        "discountPercentage": 11.08,
        "discountedPrice": 31
      }
    ],
    "total": 460,
    "discountedTotal": 403,
    "userId": 63,
    "totalProducts": 5,
    "totalQuantity": 10
  }
]



const newArray = orders.map(order => {
    if(order.id === 3) {
      const newProducts = order.products.map(prduct => {
        if(prduct.id === 90) {
          return {
            ...prduct,
            price: 600,
            quantity: 56,
            total: 600 * 56
          }
        }
        return {...prduct}
      })
      return {
        ...order,
        products: newProducts
      }
    } 
    return {...order}
 })

 console.log('newArray', newArray)

 function functionDom() {
  const elementParagraph = document.getElementById(`p1`);
  const elementContent = document.getElementById('content');
  const elementInput = document.getElementById(`textInput`);

  elementParagraph.style.color = 'blue';
  elementParagraph.style.fontSize = '55px';
  elementParagraph.style.marginLeft = '50px';
  elementParagraph.style.marginTop = '250px';

  elementContent.style.border = '1px solid red';
  const textContent = elementParagraph.textContent;

  elementParagraph.textContent = 'test new content'

  elementInput.value = 'New value';

  const valueRead  = elementInput.value
  alert(valueRead)


  console.log('elementParagraph', elementParagraph, 'elementInput', elementInput, 'textContent', textContent)
 }
