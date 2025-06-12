/* eslint-disable prettier/prettier */
export const usePriceSwitcher = () => {
  const switcher = document.querySelector('[data-price="switcher"]');
  const starterPrice = document.querySelector('[data-price="starter"]');
  const popularPrice = document.querySelector('[data-price="popular"]');
  const entriesPrice = document.querySelector('[data-price="enterprise"]');

  const priceList = {
    starter: {
      default: 120,
      witchSale: 96,
    },
    popular: {
      default: 1680,
      witchSale: 1344,
    },
    enterprise: {
      default: 2520,
      witchSale: 2016,
    },
  };

  const setPricesWitchSale = () => {
    starterPrice.textContent = `$${priceList.starter.witchSale}`;
    popularPrice.textContent = `$${priceList.popular.witchSale}`;
    entriesPrice.textContent = `$${priceList.enterprise.witchSale}`;
  };

  const setDefaultPrices = () => {
    starterPrice.textContent = `$${priceList.starter.default}`;
    popularPrice.textContent = `$${priceList.popular.default}`;
    entriesPrice.textContent = `$${priceList.enterprise.default}`;
  };

  switcher.checked = true;
  setPricesWitchSale();

  const timeInterval = document.querySelectorAll('[data-price="yr"]');

  switcher.addEventListener('click', () => {
    if (switcher.checked) {
      setPricesWitchSale();
      timeInterval.forEach((e) => {
        e.textContent = '/yr';
      });
    } else {
      setDefaultPrices();
      timeInterval.forEach((e) => {
        e.textContent = '/mo';
      });
    }
  });
};
