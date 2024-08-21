import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Trash } from 'lucide-react';

interface Props {
  setFilters: (filterName: string, filterValue: string) => void;
  cleanFilters: () => void;
  filters: {
    type: string;
    transmission: string;
    engine: string;
    people: string;
  };
}

export const FiltersCars = ({ setFilters, cleanFilters, filters }: Props) => {
  const handleFilter = (filter: string, value: string) => {
    setFilters(filter, value);
  };
  return (
    <div className='mb-8 mt-5 flex flex-col space-y-2 md:flex-row md:gap-5 md:space-y-0'>
      <Select
        onValueChange={(value) => handleFilter('type', value)}
        value={filters.type}
      >
        <SelectTrigger className='w-[180px]'>
          <SelectValue placeholder='Vehicle Type' />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Vehicle Type</SelectLabel>
            <SelectItem value='familiar'>Familiar</SelectItem>
            <SelectItem value='sedan'>Sedan</SelectItem>
            <SelectItem value='suv'>SUV</SelectItem>
            <SelectItem value='coupe'>Coupe</SelectItem>
            <SelectItem value='luxe'>De luxe</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Select
        onValueChange={(value) => handleFilter('transmission', value)}
        value={filters.transmission}
      >
        <SelectTrigger className='w-[180px]'>
          <SelectValue placeholder='Transmission' />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Transmission</SelectLabel>
            <SelectItem value='automatic'>Automatic</SelectItem>
            <SelectItem value='manual'>Manual</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Select
        onValueChange={(value) => handleFilter('engine', value)}
        value={filters.engine}
      >
        <SelectTrigger className='w-[180px]'>
          <SelectValue placeholder='Motor Type' />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Motor Type</SelectLabel>
            <SelectItem value='gasoil'>Gas oil</SelectItem>
            <SelectItem value='diesel'>Diesel</SelectItem>
            <SelectItem value='electric'>Electric</SelectItem>
            <SelectItem value='hybrid'>Hybrid</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Select
        onValueChange={(value) => handleFilter('people', value)}
        value={filters.people}
      >
        <SelectTrigger className='w-[180px]'>
          <SelectValue placeholder='People' />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>People</SelectLabel>
            <SelectItem value='2'>2</SelectItem>
            <SelectItem value='4'>4</SelectItem>
            <SelectItem value='5'>5</SelectItem>
            <SelectItem value='6'>6</SelectItem>
            <SelectItem value='7'>7</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Button onClick={cleanFilters}>
        Remove Filters <Trash className='ml-2 size-4' />
      </Button>
    </div>
  );
};
