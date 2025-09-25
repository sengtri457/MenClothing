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
      name: 'Leather Belt',
      category: 'Duffel',
      price: 35,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/7c7b9887-eacd-40ca-9596-1f26a48b9f2e/M+J+BRND+BR+SNKR+PCH+SS+CRW.png',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/7c7b9887-eacd-40ca-9596-1f26a48b9f2e/M+J+BRND+BR+SNKR+PCH+SS+CRW.png',
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e1d4a859-6fb6-43f6-9076-3b1b8362eff0/M+J+NC+GOAT+SS+CREW.png',
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f297b0d-3196-496f-b87d-52bbea7cdda3/U+NSW+TEE+OC+FB+GFX+FW+CULTURE.png',
      ],
      description: 'Full-grain leather with brushed metal buckle.',
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
      name: 'Aviator Sunglasses',
      category: 'Backpack',
      price: 59,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/dc6d7499-9663-4f92-aa05-994046de133c/U+NSW+TEE+M90+OC+OPEN.png',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/dc6d7499-9663-4f92-aa05-994046de133c/U+NSW+TEE+M90+OC+OPEN.png',
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e1d4a859-6fb6-43f6-9076-3b1b8362eff0/M+J+NC+GOAT+SS+CREW.png',
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f297b0d-3196-496f-b87d-52bbea7cdda3/U+NSW+TEE+OC+FB+GFX+FW+CULTURE.png',
      ],
      description: 'UV400 lenses with lightweight metal frame.',
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
      name: 'Aviator Sunglasses',
      category: 'Backpack',
      price: 59,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/dc6d7499-9663-4f92-aa05-994046de133c/U+NSW+TEE+M90+OC+OPEN.png',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/dc6d7499-9663-4f92-aa05-994046de133c/U+NSW+TEE+M90+OC+OPEN.png',
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e1d4a859-6fb6-43f6-9076-3b1b8362eff0/M+J+NC+GOAT+SS+CREW.png',
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f297b0d-3196-496f-b87d-52bbea7cdda3/U+NSW+TEE+OC+FB+GFX+FW+CULTURE.png',
      ],
      description: 'UV400 lenses with lightweight metal frame.',
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
      name: 'Aviator Sunglasses',
      category: 'Duffel',
      price: 59,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/dc6d7499-9663-4f92-aa05-994046de133c/U+NSW+TEE+M90+OC+OPEN.png',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/dc6d7499-9663-4f92-aa05-994046de133c/U+NSW+TEE+M90+OC+OPEN.png',
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e1d4a859-6fb6-43f6-9076-3b1b8362eff0/M+J+NC+GOAT+SS+CREW.png',
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f297b0d-3196-496f-b87d-52bbea7cdda3/U+NSW+TEE+OC+FB+GFX+FW+CULTURE.png',
      ],
      description: 'UV400 lenses with lightweight metal frame.',
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
      name: 'Classic Black Leather Jacket',
      category: 'Crew',
      price: 169,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cee7ae7f-fd02-4ff2-956d-81f67d59614f/U+NK+ED+CSH+PLY+CRW+3P-144+T90.png',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cee7ae7f-fd02-4ff2-956d-81f67d59614f/U+NK+ED+CSH+PLY+CRW+3P-144+T90.png',
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e1d4a859-6fb6-43f6-9076-3b1b8362eff0/M+J+NC+GOAT+SS+CREW.png',
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f297b0d-3196-496f-b87d-52bbea7cdda3/U+NSW+TEE+OC+FB+GFX+FW+CULTURE.png',
      ],
      description:
        'Premium leather jacket with modern fit and durable hardware.',
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
      name: 'Slim Fit White Oxford Shirt',
      category: 'Ankle',
      price: 49,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e1d4a859-6fb6-43f6-9076-3b1b8362eff0/M+J+NC+GOAT+SS+CREW.png',
      description: 'Crisp oxford shirt with sharp collar — business to casual.',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e1d4a859-6fb6-43f6-9076-3b1b8362eff0/M+J+NC+GOAT+SS+CREW.png',
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e1d4a859-6fb6-43f6-9076-3b1b8362eff0/M+J+NC+GOAT+SS+CREW.png',
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f297b0d-3196-496f-b87d-52bbea7cdda3/U+NSW+TEE+OC+FB+GFX+FW+CULTURE.png',
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
      name: 'Minimalist Sneakers',
      category: 'Crew',
      price: 89,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/815a15fc-c3e5-442c-b7a6-fcbcfe53a2a6/M+J+BRK+BL+3.0+SS+CREW.png',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/815a15fc-c3e5-442c-b7a6-fcbcfe53a2a6/M+J+BRK+BL+3.0+SS+CREW.png',
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e1d4a859-6fb6-43f6-9076-3b1b8362eff0/M+J+NC+GOAT+SS+CREW.png',
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f297b0d-3196-496f-b87d-52bbea7cdda3/U+NSW+TEE+OC+FB+GFX+FW+CULTURE.png',
      ],
      description: 'Clean silhouette, cushioned insole, everyday comfort.',
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
      name: 'Chelsea Boots',
      category: 'Knee High',
      price: 129,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b8fd5f6b-9d87-4119-ae70-977f019c534a/KB+M+NK+DF+TEE+M90+MF.png',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b8fd5f6b-9d87-4119-ae70-977f019c534a/KB+M+NK+DF+TEE+M90+MF.png',
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e1d4a859-6fb6-43f6-9076-3b1b8362eff0/M+J+NC+GOAT+SS+CREW.png',
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f297b0d-3196-496f-b87d-52bbea7cdda3/U+NSW+TEE+OC+FB+GFX+FW+CULTURE.png',
      ],
      description: 'Suede upper, elastic side panels, classic almond toe.',
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
      name: 'Leather Belt',
      category: 'Knee High',
      price: 35,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/7c7b9887-eacd-40ca-9596-1f26a48b9f2e/M+J+BRND+BR+SNKR+PCH+SS+CRW.png',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/7c7b9887-eacd-40ca-9596-1f26a48b9f2e/M+J+BRND+BR+SNKR+PCH+SS+CRW.png',
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e1d4a859-6fb6-43f6-9076-3b1b8362eff0/M+J+NC+GOAT+SS+CREW.png',
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f297b0d-3196-496f-b87d-52bbea7cdda3/U+NSW+TEE+OC+FB+GFX+FW+CULTURE.png',
      ],
      description: 'Full-grain leather with brushed metal buckle.',
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
      name: 'Aviator Sunglasses',
      category: 'Crew',
      price: 59,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/dc6d7499-9663-4f92-aa05-994046de133c/U+NSW+TEE+M90+OC+OPEN.png',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/dc6d7499-9663-4f92-aa05-994046de133c/U+NSW+TEE+M90+OC+OPEN.png',
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e1d4a859-6fb6-43f6-9076-3b1b8362eff0/M+J+NC+GOAT+SS+CREW.png',
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f297b0d-3196-496f-b87d-52bbea7cdda3/U+NSW+TEE+OC+FB+GFX+FW+CULTURE.png',
      ],
      description: 'UV400 lenses with lightweight metal frame.',
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
      name: 'Aviator Sunglasses',
      category: 'Crew',
      price: 59,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/dc6d7499-9663-4f92-aa05-994046de133c/U+NSW+TEE+M90+OC+OPEN.png',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/dc6d7499-9663-4f92-aa05-994046de133c/U+NSW+TEE+M90+OC+OPEN.png',
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e1d4a859-6fb6-43f6-9076-3b1b8362eff0/M+J+NC+GOAT+SS+CREW.png',
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f297b0d-3196-496f-b87d-52bbea7cdda3/U+NSW+TEE+OC+FB+GFX+FW+CULTURE.png',
      ],
      description: 'UV400 lenses with lightweight metal frame.',
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
      name: 'Aviator Sunglasses',
      category: 'Crew',
      price: 59,
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/dc6d7499-9663-4f92-aa05-994046de133c/U+NSW+TEE+M90+OC+OPEN.png',
      listImage: [
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/dc6d7499-9663-4f92-aa05-994046de133c/U+NSW+TEE+M90+OC+OPEN.png',
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e1d4a859-6fb6-43f6-9076-3b1b8362eff0/M+J+NC+GOAT+SS+CREW.png',
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f297b0d-3196-496f-b87d-52bbea7cdda3/U+NSW+TEE+OC+FB+GFX+FW+CULTURE.png',
      ],
      description: 'UV400 lenses with lightweight metal frame.',
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
