import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';

import { FormControl, Input, FormLabel } from '@chakra-ui/react';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(setFilter(e.currentTarget.value.trim()));
  };

  return (
    <FormControl
      width="360px"
      p="20px"
      mt="14px"
      mb="40px"
      border="1px"
      borderRadius="15px"
      borderColor="gray.200"
      boxShadow="lg"
      bg="white"
    >
      <FormLabel>
        Find contacts by name
        <Input
          type="text"
          name="filter"
          value={filter}
          onChange={handleChange}
          variant="outline"
          size="md"
        />
      </FormLabel>
    </FormControl>
  );
};
