import * as React from 'react';
import usePagination from '@mui/material/usePagination';
import { styled } from '@mui/material/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const List = styled('ul')({
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
});
const ListItem = styled('li')({
    margin: '0 10px' ,
    fontSize: '1.6rem'
  });

export default function UsePagination({count}) {
  const { items } = usePagination({
    count: count,
  });

  return (
    <nav>
      <List>
        {items.map(({ page, type, selected, ...item }, index) => {
          let children = null;

          if (type === 'start-ellipsis' || type === 'end-ellipsis') {
            children = '…';
          } else if (type === 'page') {
            children = (
              <button
                type="button"
                style={{
                  fontWeight: selected ? 'bold' : undefined,color: !selected ? 'var(--coquelicot)' : '#000' , background: selected && '#aaa'  , width:'25px' , borderRadius: '50%' , height: '25px'
                }}
                {...item}
              >
                {page}
              </button>
            );
          } else {
            children = (
              <button className={type === 'previous' ? 'Prev' : 'Next'} type="button" {...item}>
                {type === 'previous' ? <ArrowBackIcon className='arrow' /> : <ArrowForwardIcon className='arrow' />}
              </button>
            );
          }

          return <ListItem key={index}>{children}</ListItem>;
        })}
      </List>
    </nav>
  );
}