import { Injectable } from '@angular/core';
import { Bags, Hats, Socks } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class AcServices {
  public Hat: Hats[] = [
    {
      id: 1,
      name: 'Nike Club',
      category: 'Caps',
      price: 30,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4ede33a6-b717-4b6d-b03e-22432e1e1369/U+NK+CLUB+CAP+U+CB+SM+SWSH+L.png',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4ede33a6-b717-4b6d-b03e-22432e1e1369/U+NK+CLUB+CAP+U+CB+SM+SWSH+L.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4da5293e-4cc4-4e54-a36a-c2e48d0977a6/U+NK+CLUB+CAP+U+CB+SM+SWSH+L.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7a41bfb2-7537-4f25-a5fb-b868ca96be61/U+NK+CLUB+CAP+U+CB+SM+SWSH+L.png',
      ],
      description:
        'A mid-depth design with classic style for any occasion, this Nike Club cap comes in smooth twill for casual, everyday comfort.',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black'],
      details: {
        material: '100% Premium Leather',
        fit: 'Slim Fit',
        care: 'Dry clean only',
        origin: 'Made in Italy',
        warranty: '1-year limited warranty',
      },
    },
    {
      id: 2,
      name: 'Air Jordan Terra',
      category: 'Beanies',
      price: 49,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/2fdf1d75-d577-4d0c-a166-1340d59c06f9/U+J+TERRA+BEANIE+AJ.png',
      description:
        'Soft knit yarn and a low-profile cuffed design let you show off your Jordan pride in warmth, comfort and style.',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/2fdf1d75-d577-4d0c-a166-1340d59c06f9/U+J+TERRA+BEANIE+AJ.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/8c4df508-0f7e-43a7-bc8d-a29f39b770a0/U+J+TERRA+BEANIE+AJ.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/ed04531f-582d-4dd3-bcae-6698352430ae/U+J+TERRA+BEANIE+AJ.png',
      ],
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['White'],
      details: {
        material: '100% Premium Leather',
        fit: 'Slim Fit',
        care: 'Dry clean only',
        origin: 'Made in Italy',
        warranty: '1-year limited warranty',
      },
    },
    {
      id: 3,
      name: 'Jordan Apex',
      category: 'Bucket Hats',
      price: 40,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/48961f75-cb72-42ba-8fd0-b3cd3974cd04/U+J+APEX+BUCKET+JUMPMAN.png',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/48961f75-cb72-42ba-8fd0-b3cd3974cd04/U+J+APEX+BUCKET+JUMPMAN.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/c9df2e30-dc12-44ac-b81b-e6c6424f8ee9/U+J+APEX+BUCKET+JUMPMAN.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/2ba4d1b1-e46f-458c-9ee3-2752cefc0ee3/U+J+APEX+BUCKET+JUMPMAN.png',
      ],
      description:
        'Made from durable Ripstop fabric, our mid-depth Apex bucket hat gives you 360 degrees of coverage. ',
      sizes: ['S', 'M', 'L', 'XL'],

      colors: ['White', 'Black'],
      details: {
        material: '100% Premium Leather',
        fit: 'Slim Fit',
        care: 'Dry clean only',
        origin: 'Made in Italy',
        warranty: '1-year limited warranty',
      },
    },
    {
      id: 4,
      name: 'Jordan Apex',
      category: 'Bucket Hats',
      price: 29,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/eeebf4d7-9d63-40b0-b771-5bafa0f36e7d/U+J+APEX+BUCKET+WINTER.png',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/eeebf4d7-9d63-40b0-b771-5bafa0f36e7d/U+J+APEX+BUCKET+WINTER.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/ce24b3ba-17f5-4363-aaf4-1ea2e457dc1b/U+J+APEX+BUCKET+WINTER.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e4d8172e-d799-4c22-90a9-1c86092239cb/U+J+APEX+BUCKET+WINTER.png',
      ],
      description:
        'Who said bucket hats are only for warm weather? Made from durable Ripstop fabric on one side and woolly,',
      sizes: ['S', 'M', 'L', 'XL'],

      colors: ['White', 'Black'],
      details: {
        material: '100% Premium Leather',
        fit: 'Slim Fit',
        care: 'Dry clean only',
        origin: 'Made in Italy',
        warranty: '1-year limited warranty',
      },
    },
    {
      id: 5,
      name: 'Nike Club',
      category: 'Caps',
      price: 35,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/19a48830-992f-4b1b-b321-d543cedc43ee/U+NK+CLUB+CAP+U+CB+CRTZ+PTCH+L.png',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/19a48830-992f-4b1b-b321-d543cedc43ee/U+NK+CLUB+CAP+U+CB+CRTZ+PTCH+L.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/961b348c-9185-420e-87f0-b75186993645/U+NK+CLUB+CAP+U+CB+CRTZ+PTCH+L.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/21d7e036-23a4-4718-abc2-03cda8f2f1f0/U+NK+CLUB+CAP+U+CB+CRTZ+PTCH+L.png',
      ],
      description:
        'This unstructured cap has a curved bill and an adjustable back strap for a custom fit. An embroidered Cortez ',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black', 'Brown'],
      details: {
        material: '100% Premium Leather',
        fit: 'Slim Fit',
        care: 'Dry clean only',
        origin: 'Made in Italy',
        warranty: '1-year limited warranty',
      },
    },
    {
      id: 6,
      name: 'Nike Club',
      category: 'Caps',
      price: 25,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/73fde1f9-7428-4f3d-a1a3-a73f9becfcaf/U+NK+CLUB+CAP+U+CB+AM90+PTCH+L.png',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/73fde1f9-7428-4f3d-a1a3-a73f9becfcaf/U+NK+CLUB+CAP+U+CB+AM90+PTCH+L.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/50cfad87-3361-4a0b-963e-d92b0e0fb814/U+NK+CLUB+CAP+U+CB+AM90+PTCH+L.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d890716f-aa6b-4bfb-bd53-03f0e6d45899/U+NK+CLUB+CAP+U+CB+AM90+PTCH+L.png',
      ],
      description:
        'This unstructured cap has a curved bill and an adjustable back strap for a comfortable, broken-in fit. An embroidered Air Max 90.',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black', 'Brown'],
      details: {
        material: '100% Premium Leather',
        fit: 'Slim Fit',
        care: 'Dry clean only',
        origin: 'Made in Italy',
        warranty: '1-year limited warranty',
      },
    },
    {
      id: 7,
      name: 'Nike Dri-FIT',
      category: 'Caps',
      price: 55,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0159d6bc-6bb0-47d8-8a41-d05f9df45200/U+NK+DFADV+FLY+CAP+U+AB+AEROAD.png',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0159d6bc-6bb0-47d8-8a41-d05f9df45200/U+NK+DFADV+FLY+CAP+U+AB+AEROAD.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7c567eb6-ad96-4a37-b01e-503d4c1bac09/U+NK+DFADV+FLY+CAP+U+AB+AEROAD.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/70b51064-5c8a-42b5-84de-84b9e38b564f/U+NK+DFADV+FLY+CAP+U+AB+AEROAD.png',
      ],
      description:
        'This unstructured cap has a curved bill and an adjustable back strap for a comfortable, broken-in fit. An embroidered Air Max 90.',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black', 'Brown'],
      details: {
        material: '100% Premium Leather',
        fit: 'Slim Fit',
        care: 'Dry clean only',
        origin: 'Made in Italy',
        warranty: '1-year limited warranty',
      },
    },
    {
      id: 8,
      name: 'Nike Apex',
      category: 'Bucket Hats',
      price: 35,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5b5af06a-f77b-40c9-8aec-7e8fd091f75e/U+NK+APEX+BUCKET+SQ+FUT+WSH+L.png',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5b5af06a-f77b-40c9-8aec-7e8fd091f75e/U+NK+APEX+BUCKET+SQ+FUT+WSH+L.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/6b77776e-63f2-435c-a057-456e790d27b0/U+NK+APEX+BUCKET+SQ+FUT+WSH+L.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ee838251-421c-419c-a8ce-c6e793e92ec8/U+NK+APEX+BUCKET+SQ+FUT+WSH+L.png',
      ],
      description:
        'This unstructured cap has a curved bill and an adjustable back strap for a comfortable, broken-in fit. An embroidered Air Max 90.',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black', 'Brown'],
      details: {
        material: '100% Premium Leather',
        fit: 'Slim Fit',
        care: 'Dry clean only',
        origin: 'Made in Italy',
        warranty: '1-year limited warranty',
      },
    },
  ];
  getAllHats() {
    return this.Hat;
  }
  getHatCategory() {
    return [...new Set(this.Hat.map((i) => i.category))];
  }
  getHatById(id: number) {
    return this.Hat.find((p) => p.id === id);
  }
  getHatByCategory(c: string) {
    return c === 'All' ? this.Hat : this.Hat.filter((p) => p.category === c);
  }
  public Bag: Bags[] = [
    {
      id: 1,
      name: 'Nike',
      category: 'Backpack',
      price: 50,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d6d842fe-e77e-4d07-b30b-3f495fe303be/NK+ELMNTL+BKPK+-+HBR.png',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d6d842fe-e77e-4d07-b30b-3f495fe303be/NK+ELMNTL+BKPK+-+HBR.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8a14bd9e-473b-4ce8-b56d-9f7187d072f9/NK+ELMNTL+BKPK+-+HBR.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/bacbb7be-b86c-457a-9791-25929307bd39/NK+ELMNTL+BKPK+-+HBR.png',
      ],
      description:
        'From workouts to getting to work, the Nike Backpack has you covered. A large zipped compartment offers room for shoes or an extra set of clothes for the gym and your books and laptop for school.',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black'],
      details: {
        material: '100% Premium Leather',
        fit: 'Slim Fit',
        care: 'Dry clean only',
        origin: 'Made in Italy',
        warranty: '1-year limited warranty',
      },
    },
    {
      id: 2,
      name: 'Nike Duffle',
      category: 'Duffel',
      price: 49,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ca34b154-29eb-4890-b7de-401f7df7a613/NK+ACDMY+TEAM+L+DUFF.png',
      description:
        'The Nike Academy Team Duffel Bag is a durable design built to keep you organised. Designated compartments provide space for your ball.',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ca34b154-29eb-4890-b7de-401f7df7a613/NK+ACDMY+TEAM+L+DUFF.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a35dd061-1345-4556-950b-56a595b61ab7/NK+ACDMY+TEAM+L+DUFF.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1b949047-fd13-4fc1-86dd-ee5f54e9d6fa/NK+ACDMY+TEAM+L+DUFF.png',
      ],
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black'],
      details: {
        material: '100% Premium Leather',
        fit: 'Slim Fit',
        care: 'Dry clean only',
        origin: 'Made in Italy',
        warranty: '1-year limited warranty',
      },
    },
    {
      id: 3,
      name: 'Nike Sportswear AF1',
      category: 'ToteBag',
      price: 89,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/kqa4nahdb59tku4bq6sa/NK+AF-1+TOTE.png',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/kqa4nahdb59tku4bq6sa/NK+AF-1+TOTE.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/hwigmh1sql2xm4vsunw1/NK+AF-1+TOTE.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/pxdjsfy7j2uijiauppeb/NK+AF-1+TOTE.png',
      ],
      description:
        'Tough and spacious, the Nike Sportswear AF1 Tote Bag features cord handles that wrap around a large main compartment to create the perfect all-day, every day carryall.',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black'],
      details: {
        material: '100% Premium Leather',
        fit: 'Slim Fit',
        care: 'Dry clean only',
        origin: 'Made in Italy',
        warranty: '1-year limited warranty',
      },
    },
    {
      id: 4,
      name: 'Nike One',
      category: 'ToteBag',
      price: 129,
      image:
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e64f5b91-1461-4242-9e93-84a2ed5f29c2/NK+ONE+TOTE.png',
      listImage: [
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e64f5b91-1461-4242-9e93-84a2ed5f29c2/NK+ONE+TOTE.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/68ba3bf0-7143-436c-9811-572abb8368f7/NK+ONE+TOTE.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/958b7e4f-1d5f-451b-913e-829ad3781eb2/NK+ONE+TOTE.png',
      ],
      description:
        'Dont tell your other bags, but this might just be the only one you need. A large main compartment with interior pockets makes organising essentials a breeze. Exterior zip pockets let you keep small items close at hand.',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black'],
      details: {
        material: '100% Premium Leather',
        fit: 'Slim Fit',
        care: 'Dry clean only',
        origin: 'Made in Italy',
        warranty: '1-year limited warranty',
      },
    },
    {
      id: 5,
      name: 'Nike Academy Team',
      category: 'Duffel',
      price: 55,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/87ab68a5-475c-42ba-a7b3-52002ed4515d/NK+ACDMY+TEAM+M+DUFF.png',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/87ab68a5-475c-42ba-a7b3-52002ed4515d/NK+ACDMY+TEAM+M+DUFF.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/12dfe8bb-2fd3-41f5-b21f-fc5a15d20a69/NK+ACDMY+TEAM+M+DUFF.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c063a1f4-15e8-4ee3-84f0-86fc3c64006d/NK+ACDMY+TEAM+M+DUFF.png',
      ],
      description:
        'The Nike Academy Team Duffel Bag is a durable design built to keep you organised. Designated compartments provide space for your ball, boots and clothes—while multiple straps let you comfortably carry your gear when you re on the go.',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black'],
      details: {
        material: '100% Premium Leather',
        fit: 'Slim Fit',
        care: 'Dry clean only',
        origin: 'Made in Italy',
        warranty: '1-year limited warranty',
      },
    },
    {
      id: 6,
      name: 'Nike Utility Speed 2.0',
      category: 'Backpack',
      price: 105,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cc04bee4-66d9-4900-a71a-948849f6fbf5/NK+UTILITY+SPD+BKPK+-+2.0+GFX.png',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cc04bee4-66d9-4900-a71a-948849f6fbf5/NK+UTILITY+SPD+BKPK+-+2.0+GFX.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/65684ef8-488e-448b-a502-0d6bf354d5c9/NK+UTILITY+SPD+BKPK+-+2.0+GFX.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5a0da73f-4924-4bf9-8bd0-2c64c076acfc/NK+UTILITY+SPD+BKPK+-+2.0+GFX.png',
      ],
      description:
        'Keep your gear organised with exterior zipped front pockets for small items and a spacious main compartment with a luggage-style zip that opens fully to the bottom. ',
      sizes: ['ONE SIZE'],
      colors: ['Black'],
      details: {
        material: '100% Premium Leather',
        fit: 'Slim Fit',
        care: 'Dry clean only',
        origin: 'Made in Italy',
        warranty: '1-year limited warranty',
      },
    },
    {
      id: 7,
      name: 'Nike Brasilia',
      category: 'Duffel',
      price: 50,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3abc1bcd-ee9f-4328-bb0d-69a57b6db115/NK+BRSLA+S+DUFF+-+9.5+%2841L%29.png',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3abc1bcd-ee9f-4328-bb0d-69a57b6db115/NK+BRSLA+S+DUFF+-+9.5+%2841L%29.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/040f6f2f-a15c-4e54-8bc1-ade632b52441/NK+BRSLA+S+DUFF+-+9.5+%2841L%29.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8e5e7c5b-ddd4-471d-9afe-5c30dd3e4b1c/NK+BRSLA+S+DUFF+-+9.5+%2841L%29.png',
      ],
      description:
        'Hit the gym with the duffel bag made to hold all your gear. The ventilated side compartment separates your smelly shoes from your post-sweat-sesh clothes. ',
      sizes: ['ONE SIZE'],
      colors: ['Black'],
      details: {
        material: '100% Premium Leather',
        fit: 'Slim Fit',
        care: 'Dry clean only',
        origin: 'Made in Italy',
        warranty: '1-year limited warranty',
      },
    },
    {
      id: 8,
      name: 'Nike Heritage',
      category: 'Backpack',
      price: 45,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/78f96212-238c-46cd-9f8a-83b5b96a285e/NK+HERITAGE+BKPK-RETRO+PACK.png',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/78f96212-238c-46cd-9f8a-83b5b96a285e/NK+HERITAGE+BKPK-RETRO+PACK.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8b0d9f45-fe85-4bc3-884b-c086a27cf268/NK+HERITAGE+BKPK-RETRO+PACK.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4f2be2d7-dd46-414e-b57c-70c86d0ecc9f/NK+HERITAGE+BKPK-RETRO+PACK.png',
      ],
      description:
        'Tried and tested, the Nike Heritage Backpack remains the MVP of lugging around your gear.',
      sizes: ['ONE SIZE'],
      colors: ['Black'],
      details: {
        material: '100% Premium Leather',
        fit: 'Slim Fit',
        care: 'Dry clean only',
        origin: 'Made in Italy',
        warranty: '1-year limited warranty',
      },
    },
  ];
  getAllBags() {
    return this.Bag;
  }
  getBagCategory() {
    return [...new Set(this.Bag.map((i) => i.category))];
  }
  getBagById(id: number) {
    return this.Bag.find((p) => p.id === id);
  }
  getBagByCategory(c: string) {
    return c === 'All' ? this.Bag : this.Bag.filter((p) => p.category === c);
  }
  public Sock: Socks[] = [
    {
      id: 1,
      name: 'Nike Total90',
      category: 'Crew',
      price: 26,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cee7ae7f-fd02-4ff2-956d-81f67d59614f/U+NK+ED+CSH+PLY+CRW+3P-144+T90.png',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cee7ae7f-fd02-4ff2-956d-81f67d59614f/U+NK+ED+CSH+PLY+CRW+3P-144+T90.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/69b0f149-19a1-4dd0-a975-e539a6c0d1dc/U+NK+ED+CSH+PLY+CRW+3P-144+T90.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8d851ebf-03d2-4f0e-b377-1295c878d356/U+NK+ED+CSH+PLY+CRW+3P-144+T90.png',
      ],
      description:
        'With extra cushioning and sweat-wicking fabric, these Total90 socks help keep you comfortable all day long.',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black'],
      details: {
        material: '100% Premium Leather',
        fit: 'Slim Fit',
        care: 'Dry clean only',
        origin: 'Made in Italy',
        warranty: '1-year limited warranty',
      },
    },
    {
      id: 2,
      name: 'Nike Sportswear',
      category: 'Ankle',
      price: 26,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/60b9221f-180d-408c-90ba-42e9acd703ea/U+NK+NSW+EVERYDAY+ESSENTIAL+CR.png',
      description:
        'The Nike Sportswear Everyday Essential Socks are made from soft, stretchy fabric that moulds to your foot for all-day comfort.',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/60b9221f-180d-408c-90ba-42e9acd703ea/U+NK+NSW+EVERYDAY+ESSENTIAL+CR.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/9287b1e2-57fe-4026-8e2b-8c45d582fa3f/U+NK+NSW+EVERYDAY+ESSENTIAL+CR.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/2fa8d86a-9d9e-4b70-af79-1ff0d604da9b/U+NK+NSW+EVERYDAY+ESSENTIAL+CR.png',
      ],
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black'],
      details: {
        material: '100% Premium Leather',
        fit: 'Slim Fit',
        care: 'Dry clean only',
        origin: 'Made in Italy',
        warranty: '1-year limited warranty',
      },
    },
    {
      id: 3,
      name: 'Nike Everyday Plus',
      category: 'Crew',
      price: 28,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/43904bb3-bbaf-44c9-9357-38fe88680e3a/U+NK+ED+PLS+CREW+3PR+SPORT+144.png',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/43904bb3-bbaf-44c9-9357-38fe88680e3a/U+NK+ED+PLS+CREW+3PR+SPORT+144.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/40bc19d8-d5c3-4a1f-b2b9-d86c547753d5/U+NK+ED+PLS+CREW+3PR+SPORT+144.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/69ff347f-03ad-4472-8d65-70b339f4e6b1/U+NK+ED+PLS+CREW+3PR+SPORT+144.png',
      ],
      description:
        'Nike Dri-FIT technology helps keep your feet cool and dry while a band around the arch of your foot helps provide a snug and supportive fit.',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black'],
      details: {
        material: '100% Premium Leather',
        fit: 'Slim Fit',
        care: 'Dry clean only',
        origin: 'Made in Italy',
        warranty: '1-year limited warranty',
      },
    },
    {
      id: 4,
      name: 'Nike Everyday',
      category: 'Knee High',
      price: 22,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/978409c5-7716-4ff1-a04a-44d7bd3cf708/U+NK+ED+CSH+CRW+CORTZ+PTCH+144.png',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/978409c5-7716-4ff1-a04a-44d7bd3cf708/U+NK+ED+CSH+CRW+CORTZ+PTCH+144.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/07c346a5-2cd3-44c9-8cd9-635bd4f9705e/U+NK+ED+CSH+CRW+CORTZ+PTCH+144.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0e6eed75-0240-4fc3-a575-e9eafd56680f/U+NK+ED+CSH+CRW+CORTZ+PTCH+144.png',
      ],
      description:
        'With extra cushioning under the heel and forefoot, a supportive arch band and sweat-wicking fabric, these socks help keep you comfortable all day long.',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black'],
      details: {
        material: '100% Premium Leather',
        fit: 'Slim Fit',
        care: 'Dry clean only',
        origin: 'Made in Italy',
        warranty: '1-year limited warranty',
      },
    },
    {
      id: 5,
      name: 'Nike Running',
      category: 'Knee High',
      price: 18,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/baba516c-b943-4740-ad97-49abf0711c5b/U+NK+MDWT+RUN+MCRW+1PR+-+168.png',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/baba516c-b943-4740-ad97-49abf0711c5b/U+NK+MDWT+RUN+MCRW+1PR+-+168.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/50cd34ea-45f9-4fb8-b56e-bce9e0968222/U+NK+MDWT+RUN+MCRW+1PR+-+168.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/51b70779-d6f2-4f93-af47-38b5fc59bf01/U+NK+MDWT+RUN+MCRW+1PR+-+168.png',
      ],
      description:
        'Introducing Nikes newest running socks. Designed to give you a locked-in fit, they feature sweat-wicking technology and strategically placed cushioning and support.',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black'],
      details: {
        material: '100% Premium Leather',
        fit: 'Slim Fit',
        care: 'Dry clean only',
        origin: 'Made in Italy',
        warranty: '1-year limited warranty',
      },
    },
    {
      id: 6,
      name: 'Nike Running',
      category: 'Crew',
      price: 18,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3ac3eccb-e28b-4cd8-84a5-6e3003172c56/U+NK+MDWT+RUN+NS+1PR+-+168.png',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3ac3eccb-e28b-4cd8-84a5-6e3003172c56/U+NK+MDWT+RUN+NS+1PR+-+168.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/15a1b5c5-6f9c-4c45-8be5-df872865f4ff/U+NK+MDWT+RUN+NS+1PR+-+168.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5ff65770-b434-4152-bc06-d1a17c1f23dd/U+NK+MDWT+RUN+NS+1PR+-+168.png',
      ],
      description:
        'ntroducing Nikes newest running socks. Designed to give you a locked-in fit, they feature sweat-wicking technology and strategically placed cushioning and support.',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black'],
      details: {
        material: '100% Premium Leather',
        fit: 'Slim Fit',
        care: 'Dry clean only',
        origin: 'Made in Italy',
        warranty: '1-year limited warranty',
      },
    },
    {
      id: 7,
      name: 'Nike',
      category: 'Crew',
      price: 59,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d495f8a7-3b96-4da5-9b6f-c2189076d395/U+NK+TRAIL+RUN+CREW+1PR+-+200.png',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d495f8a7-3b96-4da5-9b6f-c2189076d395/U+NK+TRAIL+RUN+CREW+1PR+-+200.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ebf13902-f61d-4089-8ad5-f8a733059ab4/U+NK+TRAIL+RUN+CREW+1PR+-+200.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/cca03c05-88d2-496b-9d82-2c674965bb6e/U+NK+TRAIL+RUN+CREW+1PR+-+200.png',
      ],
      description:
        'Off-road miles just got a lot more comfortable. Zonal cushioning and a supportive arch help your feet stay comfortable, while sweat-wicking technology helps keep you cool and dry.',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black'],
      details: {
        material: '100% Premium Leather',
        fit: 'Slim Fit',
        care: 'Dry clean only',
        origin: 'Made in Italy',
        warranty: '1-year limited warranty',
      },
    },
    {
      id: 8,
      name: 'Nike Everyday ',
      category: 'Crew',
      price: 59,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/26447d1d-edf5-4df8-a816-0b945891f1f2/U+NK+ED+CSH+CREW+2P-144+EMBRDY.png',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/26447d1d-edf5-4df8-a816-0b945891f1f2/U+NK+ED+CSH+CREW+2P-144+EMBRDY.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4daac484-328f-48c3-8ea0-f031aa6d941a/U+NK+ED+CSH+CREW+2P-144+EMBRDY.png',
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/70644faf-2481-4ce6-af81-3b1ad76e5647/U+NK+ED+CSH+CREW+2P-144+EMBRDY.png',
      ],
      description:
        'Your favourite sweat-wicking socks just became much more comfy, with cushioning and a banded arch to add support where you need it most.',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black'],
      details: {
        material: '100% Premium Leather',
        fit: 'Slim Fit',
        care: 'Dry clean only',
        origin: 'Made in Italy',
        warranty: '1-year limited warranty',
      },
    },
  ];
  getAllSock() {
    return this.Sock;
  }
  getSockCategory() {
    return [...new Set(this.Sock.map((i) => i.category))];
  }
  getSockById(id: number) {
    return this.Sock.find((p) => p.id === id);
  }
  getSockByCategory(c: string) {
    return c === 'All' ? this.Sock : this.Sock.filter((p) => p.category === c);
  }
}
