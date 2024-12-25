import { CardSolution } from '@/ui/components';

const AdvertisementSale = () => {
  return (
    <section className="my-32 container flex justify-center">
      <div className="grid lg:grid-cols-4 gap-6 md:grid-cols-2">
        <CardSolution
          src="/icon_shop.svg"
          alt="icon shop"
          isBorder
          title="10.5k"
          desc="Sallers active our site"
        />
        <CardSolution
          src="/icon-dola.svg"
          alt="icon dola"
          isBorder
          title="33k"
          desc="Mopnthly Produduct Sale"
        />
        <CardSolution
          src="/icon_bag.svg"
          alt="icon bag"
          isBorder
          title="45.5k"
          desc="Customer active in our site"
        />
        <CardSolution
          src="/icon_money.svg"
          alt="icon money"
          isBorder
          title="25k"
          desc="Anual gross sale in our site"
        />
      </div>
    </section>
  );
};

export default AdvertisementSale;
