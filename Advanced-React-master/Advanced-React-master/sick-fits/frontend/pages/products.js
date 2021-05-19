import Pagination from '../components/Pagination';
import Products from '../components/Products';

export default function ProductsPage() {
  return (
    <div>
      <Pagination page={4} />
      <Products />
      <Pagination page={4} />
    </div>
  );
}
