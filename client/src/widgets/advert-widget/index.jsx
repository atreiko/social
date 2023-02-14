import { Typography, useTheme } from '@mui/material'
import FlexBetween from 'components/FlexBetween'
import Wrapper from 'components/Wrapper'

const AdvertWidget = () => {
  const { palette } = useTheme()
  const dark = palette.neutral.dark
  const main = palette.neutral.main
  const medium = palette.neutral.medium

  return (
    <Wrapper>
      <FlexBetween>
        <Typography color={dark} variant='h5' fontWeight='500'>
          Sponsored
        </Typography>
      </FlexBetween>
      <img 
        width='100%'
        height='auto'
        alt='advert'
        src='http://localhost:3141/assets/info4.jpeg'
        style={{ borderRadius: '.75rem', margin: '.75rem 0' }}
      />
      <FlexBetween flexDirection='column'>  {/* flexDirection='column' */}
        <Typography color={main}>MikaCosmetics</Typography>
        <Typography color={medium}>mikacosmetics.com</Typography>
      </FlexBetween>
      <Typography color={medium} m='.5rem 0'>
        Your pathway to stunning and immaculate beauty and made sure your skin is exfoliating skin and shining like light.
      </Typography>
    </Wrapper>
  )
}

export default AdvertWidget