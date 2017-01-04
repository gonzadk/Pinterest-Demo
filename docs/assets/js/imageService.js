galeryApp.service('imageService', [
	function() {
		this.randomize = true;

		this.images = [{
			title: 'Hiroshima',
			defaultImage: 'place01.jpg',
			description: 'Morning in <strong>Japan, Hiroshima</strong>, by Kenji Yamamura',
			premium: true,
			keywords: ['Japan', 'Hiroshima', 'Kenji Yamamura', 'Place'],
			category: "",
			url: '',
		}, {
			title: 'Lower Antelope Canyon',
			defaultImage: 'place02.jpg',
			description: '',
			premium: false,
			keywords: ['Lower Antelope', 'Canyon', 'Place'],
			category: "",
			url: '',
		}, {
			title: 'Adidas SuperStar Weave',
			defaultImage: 'adidas01.jpg',
			description: '',
			keywords: ['Adidas', 'Sneakers'],
			category: "Sneakers",
			url: ''
		}, {
			title: 'Kobe Bryant Ilustration',
			defaultImage: 'basket01.jpg',
			description: 'The best.',
			keywords: ['Kobe Bryant', 'Ilustration', 'Basket'],
			category: "Basket",
			url: '',
		}, {
			title: 'Nike Air Max 90',
			defaultImage: 'nike01.jpg',
			description: '',
			premium: false,
			keywords: ['Nike', 'Outdoor', 'Colours', 'Sneakers'],
			category: 'Sneakers',
			url: '',
		}, {
			title: 'Russel Westbrook Ilustration',
			defaultImage: 'basket02.jpg',
			description: 'No doubt one of the most passionate and fiercest competitors in the NBA.',
			keywords: ['Russel Westbrook', 'Ilustration', 'Basket'],
			category: "Basket",
			url: '',
		}, {
			title: 'Lebron James',
			defaultImage: 'basket03.jpg',
			description: 'The Last <em>MVP</em>',
			keywords: ['The King', 'Lebron James', 'Basket'],
			category: "Basket",
			url: '',
		}, {
			title: 'Honda CB125',
			defaultImage: 'motorcycle01.jpg',
			description: 'Motomood',
			keywords: ['Honda CB125', 'Motorcycle'],
			category: '',
			url: '',
		}, {
			title: 'Golden State Ilustration',
			defaultImage: 'basket04.jpg',
			description: 'The Splash Brothers with Durant',
			keywords: ['Ilustration', 'Stephen Curry', 'Golden State', 'Kevin Durant', 'Klay Thompson', 'Basket'],
			category: "Basket",
			url: '',
		}, {
			title: 'Black Mustang',
			defaultImage: 'cars01.jpg',
			description: '',
			keywords: ['Car', 'Ford Mustang'],
			category: "Cars",
			url: '',
		}, {
			title: 'Chevelle SS',
			defaultImage: 'cars02.jpg',
			description: '1972 Chevelle SS',
			keywords: ['Car', 'Chevrolet Chevelle', 'Restoration'],
			category: "Cars",
			url: '',
		}, {
			title: 'Camaro',
			defaultImage: 'cars03.jpg',
			description: 'Camaro SS',
			keywords: ['Old Car', 'Chevrolet Camaro'],
			category: "Cars",
			url: '',
		}
		];
	}
])