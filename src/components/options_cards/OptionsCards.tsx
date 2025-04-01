import React from 'react';
import styles from './OptionsCards.module.css';
import Slider from 'react-slick';
import Button from '../Button.tsx';


interface OptionsCardsItem {
  type: string;
  title: string;
  subtitle: string;
  image: string;
  to?: string;
  detalii?: string;
  popup?: string;
}

interface OptionsCardsProps {
  items: OptionsCardsItem[];
  popupHandler?: (popupId: string) => void;
}


const OptionsCards: React.FC<OptionsCardsProps> = ({ items = []  }) => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2800,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  function formatText(text: string): string {
    // Step 1: Replace <b> and </b> with placeholders
    let temp = text
      .replace(/<b>/gi, '___B_OPEN___')
      .replace(/<\/b>/gi, '___B_CLOSE___')
      .replace(/<grad1>/gi, '___GRAD1_OPEN___')
      .replace(/<\/grad1>/gi, '___GRAD1_CLOSE___')
      .replace(/<grad2>/gi, '___GRAD2_OPEN___')
      .replace(/<\/grad2>/gi, '___GRAD2_CLOSE___');

    // Step 2: Split the string on ':/', trim and join with <br />
    temp = temp
      .split(':/')
      .map(part => part.trim())
      .join('<br />');

    // Step 3: Restore placeholders to real HTML tags
    return temp
      .replace(/___B_OPEN___/g, '<strong>')
      .replace(/___B_CLOSE___/g, '</strong>')
      .replace(/___GRAD1_OPEN___/g, '<span class="gradient_text_1">')
      .replace(/___GRAD1_CLOSE___/g, '</span>')
      .replace(/___GRAD2_OPEN___/g, '<span class="gradient_text_2">')
      .replace(/___GRAD2_CLOSE___/g, '</span>');
  }

  const handleClick = (popupScript: string | undefined) => {
    if (!popupScript) return;
    try {
      // eslint-disable-next-line no-new-func
      const fn = new Function(popupScript);
      fn();
    } catch (error) {
      console.error('Error evaluating popup script:', error);
    }
  };



  return (
    <>
    <Slider {...settings} className={styles.options_cards_carousell}>
      {items.map((item: OptionsCardsItem) => (
        <div className={styles.options_cards_carousell_block} key={item.title}>
          <div className={styles.options_cards_carousell_block_inside}>
            <div className={styles.options_cards_carousell_block_inside_type}>
              {item.type}
            </div>
            <div className={styles.options_cards_carousell_block_inside_title}>
              <div
                dangerouslySetInnerHTML={{
                  __html: formatText(item.title),
                }}
              />
            </div>

            <div
              className={styles.options_cards_carousell_block_inside_subtitle}
            >
              <div
                dangerouslySetInnerHTML={{
                  __html: formatText(item.subtitle),
                }}
              />
            </div>

            <div className={styles.options_cards_carousell_block_inside_btns}>
              {item.to && (
                <Button
                  to={item.to}
                  bgcolor={'var(--theme_primary_color_blue_3)'}
                  border={'var(--theme_primary_color_blue_3)'}
                  hover_border={'var(--theme_primary_color_blue_2)'}
                  hover_bgcolor={'var(--theme_primary_color_blue_3)'}
                  icon={'arrow_right'}
                >
                  Activează acum
                </Button>
              )}
              {item.detalii && (
                <Button
                  to={item.to}
                  bgcolor={'var(--theme_primary_color_blue_3)'}
                  border={'var(--theme_primary_color_blue_3)'}
                  hover_border={'var(--theme_primary_color_blue_2)'}
                  hover_bgcolor={'var(--theme_primary_color_blue_3)'}
                  icon={'arrow_right'}
                  onClick={() => handleClick(item.detalii)}
                >
                  Detalii ofertă
                </Button>
              )}
              {item.popup && (
                <div
                  className={styles.options_cards_carousell_block_inside_popup}
                  onClick={() => handleClick(item.popup)}
                >
                  Detalii ofertă
                </div>
              )}
            </div>
          </div>
          <img
            className={styles.options_cards_carousell_block_img}
            src={item.image}
            alt="Moldtelecom"
          />
        </div>
      ))}
    </Slider>


 </>
  );
};

export default OptionsCards;
