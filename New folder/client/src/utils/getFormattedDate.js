const getFormattedDate = date => {
   return new Date(Date.parse(date)).toLocaleDateString("en-US", {
      dateStyle: "medium"
   });
};

export default getFormattedDate;
