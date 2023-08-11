const text = (name, gender, plan, contact, age, date) => {
  const formatDate = (date) => {
    const options = {
      weekday: "short",
      day: "numeric",
      month: "short",
      year: "numeric",
    };
    return new Date(date).toLocaleDateString("en-US", options);
  };
  return (
    `📋 *Client Details* 📋%0A%0A` +
    `*Name:* ${name}%0A` +
    `*Gender:* ${gender}%0A` +
    `*Plan:* ${plan}%0A` +
    `*Contact:* ${contact === undefined ? "Prefer Not To Say" : contact}%0A` +
    `*Age:* ${age === undefined ? "Prefer Not To Say" : age}%0A` +
    `*Joining Date:* ${
      date === undefined ? "Prefer Not To Say" : formatDate(date)
    }%0A`
  );
};

export default text;
