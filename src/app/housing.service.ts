import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  protected housingLocationList: HousingLocation[] = [
    {
      id: 0,
      name: 'Formal Dress for Women',
      city: '$200',
      photo: 'https://img.freepik.com/free-photo/high-fashion-portrait-young-beautiful-brunette-woman-wearing-nice-pink-summer-suit_158538-19517.jpg?w=2000'
    },
    {
      id: 1,
      name: 'Cocktail dress',
      city: '$100',
      photo: 'https://img.freepik.com/premium-photo/pretty-blonde-inlong-ink-dress-spinning_132075-1080.jpg'
    },
    {
      id: 2,
      name: 'Chic Styles Dress',
      city: '$150',
      photo: 'https://i.pinimg.com/736x/88/0f/cd/880fcd711b5123485193a1b5b8e5ca13.jpg'
    },
    {
      id: 3,
      name: 'Elegant Dress',
      city: '$300',
      photo: 'https://c0.wallpaperflare.com/preview/298/581/92/fashion-female-model-clothes.jpg'
    },
    {
      id: 4,
      name: 'Formal Suit for women',
      city: '$450',
      photo: 'https://i.pinimg.com/236x/fd/f5/83/fdf583d2a5955b96f9e59a4da9fb3cf3--street-style-trends-model-street-style.jpg'
    },
    {
      id: 5,
      name: 'Casual Street Style Dress',
      city: '$350',
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd9GJup0iSpQVCSnShECOxHa0vkYN6cXV_kiAmEkN3Ugm2ce75AWgyNRrtR5dB_Sth_ZA&usqp=CAU'
    }
  ];

  getAllHousingLocations(): HousingLocation[] {
    return this.housingLocationList;
  }

  getHousingLocationById(id: number): HousingLocation | undefined {
    return this.housingLocationList.find(housingLocation => housingLocation.id === id);
  }
}