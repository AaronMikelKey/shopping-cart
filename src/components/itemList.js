const itemList = [
    {
        name: 'Kerosene Lantern',
        url: 'https://images.unsplash.com/photo-1546484947-adf12c1b9176?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
        description: 'Typical kerosene lantern.  Replacable wick and easily adjustable.',
        price: '10.00',
        amount: 1
    },
    {
        name: 'Red Tent',
        url: 'https://images.unsplash.com/photo-1534950947221-dcaca2836ce8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
        description: 'Two person tent.  Easy to assemble and pack away.  Lightweight.',
        price: '200.00',
        amount: 1
    },
    {
        name: 'Small Cooking Pot',
        url: 'https://images.unsplash.com/photo-1524880109260-7ba81ca1d749?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1954&q=80',
        description: 'Small pot for cooking on propane or open flame.',
        price: '15.00',
        amount: 1
    },
    {
        name: 'Hatchet',
        url: 'https://images.unsplash.com/photo-1554341542-66697b9010d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1955&q=80',
        description: 'Small hatchet good for chopping firewood for a campfire.',
        price: '25.00',
        amount: 1
    },
    {
        name: 'Pocket Knife',
        url: 'https://images.unsplash.com/photo-1506915792737-4573cbd01da1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
        description: 'Small knife for all of your camping cutting needs.',
        price: '5.00',
        amount: 1
    },
    {
        name: 'Dutch Oven',
        url: 'https://images.unsplash.com/photo-1509806791958-60259e6b5b63?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
        description: 'Cast Iron dutch oven great for cooking on an open flame.',
        price: '20.00',
        amount: 1
    },
    {
        name: 'Carabiner',
        url: 'https://images.unsplash.com/photo-1541690090176-17d35a190b6c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80',
        description: 'Carabiner for clipping items to your belt or backpack.  NOT FOR CLIMBING',
        price: '5.00',
        amount: 1
    },
    {
        name: 'Rain Jacket',
        url: 'https://images.unsplash.com/photo-1559894552-a5920450decc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80',
        description: 'Heavy duty durable and bright rain jacket.',
        price: '80.00',
        amount: 1
    },
    {
        name: 'Camp Cup',
        url: 'https://images.unsplash.com/photo-1539183204366-63a0589187ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
        description: 'Stainless Steel cup for warming up by a fire or pouring your coffee into.',
        price: '10.00',
        amount: 1
    },
    {
        name: 'JetBoil Cooking Kit',
        url: 'https://images.unsplash.com/photo-1520963959303-a5cc3bdf9260?ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80',
        description: 'Compact and portable cooking system.',
        price: '110.00',
        amount: 1
    },
    {
        name: 'Hammock',
        url: 'https://images.unsplash.com/photo-1445307806294-bff7f67ff225?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1953&q=80',
        description: 'Single person hammock for enjoying a nice view.',
        price: '135.00',
        amount: 1
    },
    {
        name: 'Compass',
        url: 'https://images.unsplash.com/photo-1484910292437-025e5d13ce87?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1688&q=80',
        description: 'Magnetic compass for adjusting your route.',
        price: '5.00',
        amount: 1
    },
    {
        name: 'Camping Grill',
        url: 'https://images.unsplash.com/photo-1444012104069-996724bf4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=932&q=80',
        description: 'The perfect grill for camping. Small but still cooks whatever you need.',
        price: '30.00',
        amount: 1
    },
    {
        name: 'Down Jacket',
        url: 'https://images.unsplash.com/photo-1493568000180-ca2fb70ddcba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        description: 'Goose down jacket for keeping you warm in any climate.',
        price: '90.00',
        amount: 1
    },
    {
        name: 'Dog Saddlebags',
        url: 'https://images.unsplash.com/photo-1501016377994-dfb83ebcd6ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
        description: 'The perfect pack for your pup.',
        price: '60.00',
        amount: 1
    },
    {
        name: 'Leather Pack',
        url: 'https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=969&q=80',
        description: 'Lightweight leather pack for carrying your supplies.',
        price: '75.00',
        amount: 1
    },
    {
        name: 'Hiking Pole and Backpack Kit',
        url: 'https://images.unsplash.com/photo-1592388748465-8c4dca8dd703?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
        description: 'Great hiking poles and backpack combo kit.',
        price: '235.00',
        amount: 1
    },
    {
        name: 'Spoon Set',
        url: 'https://images.unsplash.com/photo-1526434426615-1abe81efcb0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        description: 'Plastic reusable spoon set.',
        price: '8.00',
        amount: 1
    },
    {
        name: 'Hand Shovel',
        url: 'https://images.unsplash.com/photo-1535090042247-30387644aec5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1009&q=80',
        description: 'Handheld shovel for digging small holes.',
        price: '12.00',
        amount: 1
    },
    {
        name: 'Sleeping bag',
        url: 'https://images.unsplash.com/photo-1558477280-1bfed08ea5db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
        description: 'Cold weather sleeping bag guaranteed to keep you warm.',
        price: '95.00',
        amount: 1
    },
    {
        name: 'Rope',
        url: 'https://images.unsplash.com/photo-1476571172406-d9c3b842c253?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
        description: '1/2" rope for all your tieing needs',
        price: '5.00',
        amount: 1
    }
];

export default itemList;