import Input from '@/components/Input';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '@/redux/filtersSlice';

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.name);

  const handleSearch = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <Input
      value={filter}
      onChange={handleSearch}
      placeholder="Search"
      label="Find contacts by name"
    />
  );
}
