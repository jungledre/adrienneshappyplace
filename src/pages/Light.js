import React from 'react';
import Content from '../components/Content';

const info = {
  supplies: [
    {
      title: 'Glass Clock Faces',
      content: [
        '2 large clock faces of different sizes',
        // 'Richard Laurence Young Yep www.yaley.com buy the little two oz packages. They range in price from $11 up to $19. do NOT buy dye blocks as it is simply powdered dye dissolved in candle wax and totally useless for dying mineral oil. Stay away from any of the Yaley dyes marked as "fluorescent" as those are pigments and not dyes. Light won\'t shine through pigment. Also stay away from any and all liquid candle dye. Liquid candle dye is very weak compared to powdered dye. Yaley has about 12 different colors of powdered candle dye. You should be able to have one of every color for under $200. The yellow dye powder I bought, which is the most commonly used, has lasted me over a year. Use less than a thumb nail full for a 16 oz bottle of mineral oil. So about a 10th of a teaspoon full. You can always add more powdered dye if you need to, but thinning it out requires more clear mineral oil. The real proof of your dyed oil is to actually put it in your crystals to see how dark and concentrated it is. If you are buying mineral oil in gallon bottles like I do, then measure off enough oil to fill your dispenser bottle. I use plastic bottles from eBay that have a "flip top" lid. Stay away from the bottles that have a "disc top" The eBay item number for these 16 Oz plastic bottles is 121886313585. Or you can put in the actual title of the bottles. The "title" for these bottles is: 16 Ounce Cylinder Plastic Bottle HDPE + Flip Top Cap BOX OF 10 NATURAL. Put either the title or the Item Number in the main eBay search engine and the bottles will pop up. They are $9.16 shipping for the 10 bottles. The cost for 10 bottles is only $8.99. Order two lots. You\'ll have 20 bottles. The seller does have "Combined Shipping" so shipping is less than 2 X the $9.16. Plus you will have more bottles for different viscosities of oil. OK Back to dying your oil. Pour your measured mineral oil into a stainless steel cooking pot. Do NOT use a "cast iron" pot or anything except stainless steel. Most metals for cooking pots are slightly porous and some of your dye will remain in the metal pot and will add to the next color you dye. A good source for Stainless Steel cooking pots are thrift stores and yard sales. Buying them on the open market is very expensive. Anyway, back to dying: Heat your mineral oil on an open flame on the stove. Hopefully you have a gas stove instead of electric. Heat the oil until it begins to smoke then turn off the flame or remove your oil cooking pot from the heat source. Allow the oil to cool for about one minute. Then slowly add your powdered dye a little at a time. Stirring constantly. I use long handled ice tea spoons because you can get all the way inside your little plastic bag of dye powder. Also an ice tea spoon holds about 1/2 as much as a regular tea spoon. Start out with a tiny amount of dye powder. After stirring for about a minute, allow your dyed oil to fill the teaspoon you use to stir the dyed oil. Let the dyed oil in the spoon drip back into the cooking pot. As you drip the dyed oil, look through it to see how dense or concentrated your dyed oil is. Yellow requires the most dye powder. Purple requires the least amount of powder. Once you have completed your oil dying process, put a large plastic or metal bowl in the sink and half fill it with cold water. Place your dye pot in the water bowl and allow it to "float" in the bowl of cold water. This will speed the cooling process so you can pour your dyed oil back into your dispenser bottle. THIS IS VERY IMPORTANT!! If you don\'t cool your dyed mineral oil sufficiently, the oil will melt the dispenser bottle. If you can put your finger in the dyed oil, it is cool enough to pour back into your dispenser bottle. Badda Bing...Badda Boom! You\'re done. Happy Dying ....Wizz www.wizzardlightshow.com',
        <a href='http://liquidlightshop.com'>Liquid Light Lab Shop</a>
      ]
    },
    {
      title: 'Water Dyes',
      content: [
        'Food Coloring',
        <a href='https://www.docmartins.com/collections/hydrus-fine-art-watercolor-bottles'>
          Dr. Ph. Martin's Watercolor Dyes
        </a>
      ]
    },
    {
      title: 'Oil Dyes',
      content: [
        <a href='http://liquidlightshop.com'>Liquid Light Lab Oil Dyes</a>
      ]
    }
  ],
  research: [
    {
      title: '',
      content: [
        <a href='https://www.exploratorium.edu/snacks/on-the-fringe'>
          {' '}
          interference patterns
        </a>
      ]
    }
  ],
  artists: [
    {
      title: '',
      content: [
        <a href='http://liquidlightshop.com'>Liquid Light Lab</a>,
        <a href='https://www.youtube.com/user/UniversalColors'>
          {'UniversalColors'}
        </a>
      ]
    }
  ]
};

function Light() {
  return (
    <div className='light rainbow-container'>
      <h1>Psychedelic Light Shows</h1>
      <p>
        'To make liquid light art, you might want to use the following supplies'
      </p>
      <h2>Supplies</h2>
      <Content content={info.supplies} />

      <h2>Research</h2>
      <Content content={info.research} />

      <h2>Light Artists</h2>
      <Content content={info.artists} />

    </div>
  );
}

export default Light;
