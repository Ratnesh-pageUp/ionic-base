import { Component, OnInit } from '@angular/core';
import SwiperCore ,{ SwiperOptions,EffectFade } from 'swiper';

SwiperCore.use([EffectFade]);

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: { clickable: true,el: ".swiper-pagination",
    dynamicBullets: true,},
    scrollbar: { draggable: true },
    loop:true,
    autoplay:true,
    speed:200,
    effect:'cube'
  };

  images: string[] = [
    'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60',
    'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60',
    'https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60',
  ];

  constructor() {}

  ngOnInit() {}
}
