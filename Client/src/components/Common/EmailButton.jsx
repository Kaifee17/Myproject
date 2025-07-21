import React from 'react';
import { MdEmail } from 'react-icons/md';

const EmailButton = () => {
  const gmailLink =
    'https://mail.google.com/mail/?view=cm&fs=1&to=WebDone00@gmail.com&su=I+want+to+ask+about+the+.......+website';

  return (
    <a
      href={gmailLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-gray-200 p-4 rounded-2xl shadow-lg hover:bg-white transition-all z-50"
      title="Contact via Gmail"
    >
      <MdEmail size={30} color="red" />
    </a>
  );
};

export default EmailButton;
