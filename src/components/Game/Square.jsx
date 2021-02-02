/** @jsx jsx */
import { jsx, Image, Box } from 'theme-ui';
import { styles } from './styles';

const Square = ({ value, handleClick, index }) => {

  const handleClickToApp = () => {
    handleClick(index);
  }

  return(
    <Box
      sx={{
        width: ['8.33vw', null, '50px'],
        height: ['8.33vw', null, '50px'],
        border: ['0.1vw solid #419d43', null, '0.5px solid #419d43'],
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '5px',
      }}
      onClick={handleClickToApp}
    >
      <Image
        src={value}
        alt='photos'
        sx={{
          width: ['8.33vw', null, '50px'],
          height: ['8.33vw', null, '50px'],
        }}
        />
    </Box>
  );
}

export default Square;