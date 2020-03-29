import * as React from 'react';

interface CaronaProps {
  names: String[];
}

const Carona: React.FC<CaronaProps> = ({ names }) => (
  <div className="zn-covid">
    <div>
      <h2>Dear Friends &amp; Family,</h2>
      <p>
        It is with heavy and full hearts that we inform you of our decision to postpone our wedding. The love and friendship that motivated us to celebrate with you is the same which necessitates this decision. Our marriage will be all the more meaningful if we care for ourselves, our loved ones, and our community. We hope to marry this summer as planned and celebrate with everyone next year.
      </p>
      <p>
        To those of you that have already made travel and accommodation plans, we apologize for any inconvenience that this may cause.
      </p>
      <p>
        Thank you for all of your support and enthusiasm for our relationship and wedding. We hope to have an opportunity to dance, eat, toast, drink, laugh, reminisce, and love with you soon.
      </p>
      <p>{names.join(' & ')}</p>
    </div>

    <img src="/images/us.jpg" />
  </div>
);

export default Carona;