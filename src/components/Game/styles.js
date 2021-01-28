export const styles = {
  body: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  battleshipTitle: {
    fontSize: '40px',
    margin: '20px 0px 10px 0px',
    fontFamily: 'Barlow Condensed, sans-serif',
    letterSpacing: '2px',
  },
  subTitleContainer: {
    fontSize: '15px',
    backgroundColor: 'rgb(252,87,67)',
    padding: '10px',
    color: 'white',
    marginBottom: '0px',
  },
  subTitle: {
    margin: '0px',
    fontWeight: '600',
  },
  square: {
    width: '50px',
    height: '50px',
    border: '0.5px solid #419d43',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '5px',
  },
  board: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '540px',
  },
  message: {
    fontSize: '20px',
    marginTop: '0px',
    color: 'black',
    fontWeight: '600',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '40px',
  },
  stats: {
    lineHeight: '25px',
    margin: '10px 0px',
  },
  regularFont: {
    color: 'black',
    fontWeight: '800',
  },
  warningFont: {
    color: 'rgb(252,87,67)',
    fontWeight: '800',
  },
  hitCounter: {
    fontWeight: '800',
  },
  battleshipFooter: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  reset: {
    fontSize: '16px',
    backgroundColor: 'rgb(252,87,67)',
    color: 'black',
    fontWeight: '600',
    letterSpacing: '1px',
    width: '120px',
    height: '25px',
    fontFamily: 'Barlow Condensed, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
  },
  photos: {
    width: '50px',
    height: '50px',
  },
  footer: {
    fontSize: '10px',
    marginTop: '50px',
    marginBottom: '20px',
    color: 'black',
  },
  header: {
    color: 'white',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    position: 'relative',
  },
  navbar: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: '0px',
  },
  headerTitle: {
    fontFamily: 'Barlow Condensed, sans-serif',
    textAlign: 'left',
    fontSize: '4.3vw',
    fontWeight: '700',
    color: 'black',
    margin: '1.25% 0% 1.25% 2.5%',
    transition: '0.25s',
  },
  '@media only screen and (min-width: 930px)': {
    headerTitle: {
      fontSize: '40px',
      margin: '11.7px 0px 11.7px 23.22px',
    },
  },
  '@media only screen and (max-width: 600px)': {
    header: {
      flexDirection: 'column',
      alignItems: 'center',
    },
    headerTitle: {
      fontSize: '25.8px',
      margin: '7.5px 0 0 0',
    },
    battleshipTitle: {
      marginTop: '60px',
    },
    /*
    #subTitleContainer {
      fontSize: 2.5vw,
      padding: 1.67vw,
    },
    #subTitleLabel {
      fontSize: 1.8vw,
    }, */
    square: {
      width: '8.33vw',
      height: '8.33vw',
      border: '0.1vw solid #419d43',
    },
    board: {
      width: '93vw',
    },
    message: {
      fontSize: '3.33vw',
      height: '6.67vw',
    },
    stats: {
      lineHeight: '4.2vw',
      margin: '1.665vw 0px',
      fontSize: '2.67vw',
    },
    // reset: {
    //   fontSize: '2.67vw',
    //   letterSpacing: '0.153vw',
    //   width: '20vw',
    //   height: '4vw',
    // },
    photos: {
      width: '8.33vw',
      height: '8.33vw',
    },
  },
  '@media only screen and (max-width: 389px)': {
    subTitle: {
      fontSize: '3.85vw',
    },
  },
},