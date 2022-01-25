import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import { useSelector } from 'react-redux';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import officeRoom from 'assets/Img/OfficePictures/officeRoom.png';
import logo from 'assets/reservationBureau.png';
import Header from 'components/Header';
import Pin from './Pin';
import Slot from './officeSlot';
import SOffice from './style';

export default function Office() {
  const user = useSelector((state) => state.user);
  SwiperCore.use([Navigation]);
  const plan = {
    backgroundImage: `url(${officeRoom})`,
  };

  const pinClasses = [
    'button1',
    'button2',
    'button3',
    'button4',
    'button5',
    'button6',
  ];
  const today = new Date();
  const days = [];

  const slotsDisplay = [
    { slotHour: 8, slotDisplay: '8h-12h' },
    { slotHour: 9, slotDisplay: '14h-18h' },
  ];

  for (let i = 0; i < 7; i += 1) {
    const dayDate = new Date();
    dayDate.setDate(today.getDate() + i + 1);
    const dayDisplay = dayDate.toLocaleString('fr-FR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    const slots = [];
    for (let j = 0; j < slotsDisplay.length; j += 1) {
      const { slotDisplay } = slotsDisplay[j];
      const slotTime = dayDate.setHours(slotsDisplay[j].slotHour, 0, 0);
      slots.push({ slotDisplay, slotTime });
    }
    days.push({ display: dayDisplay, slots });
  }
  return (
    <>
      <Header logo={logo} />
      <SOffice avatar={user.picture}>
        {pinClasses.map((pinClass) => (
          <Pin pinClass={pinClass} />
        ))}

        <div style={plan} className="plan" alt="office room" />
        <div className="rowProfiles">
          <div className="circle1" />
          <AvatarGroup max={5}>
            <Avatar alt="User avatar 1" src="https://www.placecage.com/80/80" />
            <Avatar alt="User avatar 2" src="https://www.placecage.com/81/81" />
            <Avatar
              alt="User avatar 3"
              src="https://www.stevensegallery.com/80/80"
            />
            <Avatar
              alt="User avatar 4"
              src="https://www.fillmurray.com/78/78"
            />
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
            <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          </AvatarGroup>
          <p>sont présents aujourd&apos;hui</p>
        </div>
        <h2>Bureau n°1</h2>
        <Swiper navigation slidesPerView={2} className="mySwiper">
          {days.map((day) => {
            return (
              <SwiperSlide key={day.display}>
                <h3>{day.display}</h3>
                <div className="slots">
                  {day.slots.map((slot) => {
                    return <Slot key={slot.slotTime} slot={slot} />;
                  })}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </SOffice>
    </>
  );
}
