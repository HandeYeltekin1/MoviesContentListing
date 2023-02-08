import axios from 'axios';
export const getMoviesList = async () => {
  return await axios.get(
    'https://itvepg10013.tmp.tivibu.com.tr/iptvepg/frame3046/sdk_getprevuellist.jsp;jsessionid=231A239D4B5D85554F1D1CD568861071?channelcode=ch00000000000000001441&begintime=2023.02.06+00:00:00&endtime=2023.02.06+23:59:59',
  );
};

// export const getMovieDetails = async prevuecode => {
//   return await axios.get(
//     `https://itvepg10013.tmp.tivibu.com.tr/iptvepg/frame3046/sdk_getprevueinfo.jsp;jsessionid=231A239D4B5D85554F1D1CD568861071?prevuecodes=${prevuecode}`,
//   );
// };

export const getMovieDetails = async prevuecode => {
  console.log('prevuecode', prevuecode);
  return await axios.get(
    `https://itvepg10013.tmp.tivibu.com.tr/iptvepg/frame3046/sdk_getprevueinfo.jsp;jsessionid=231A239D4B5D85554F1D1CD568861071?prevuecodes=${prevuecode}`,
  );
};
