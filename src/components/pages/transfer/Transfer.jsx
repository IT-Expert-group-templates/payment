import React, { useState } from 'react';
import s from './Transfer.module.scss';
import { RiBankLine } from 'react-icons/ri';

function Transfer() {
  const [sum, setSum] = useState('');
  const [cardSender, setCardSender] = useState('');
  const [cardRecipient, setCardRecipient] = useState('');

  const submit = (e) => {
    e.preventDefault();
    console.log(sum, cardRecipient, cardSender);
  };


  return (
    <div className={s.main}>
      <form className={s.container} onSubmit={submit}>
        <div className={s.flex}>
          <div className={s.labelDiv}>
            <h2>
              Переводы с карты на карту
            </h2>
            <p>
              Стоимость услуги 1%
            </p>
          </div>
          <div className={s.btnBank}>
            <RiBankLine />
            <p>Банки, доступные для переводов</p>
          </div>
        </div>
        <div className={s.sum}>
          <input
            autoComplete="off"
            id="amount_transfer"
            inputMode="decimal"
            // mask="separator"
            maxLength="13"
            name="amount"
            // ngmodel=""
            pattern="^\d+(\.(\d){1,2})?$"
            placeholder="0"
            required=""
            type="text"
            value={sum}
            onChange={(e) => setSum(e.target.value)} />
          <label>
            Введите сумму перевода
          </label>
        </div>
        <div className={s.flex}>
          <div className={s.inFlex}>
            <label>Номер карты отправителя</label>
            <input
              required
              type="text"
              // mask="0000 0000 0000 0000"
              pattern={`^[0-9]{16}$`}
              placeholder="0000 0000 0000 0000 "
              value={cardSender}
              onChange={(e) => setCardSender(e.target.value)}
            />
          </div>
          <div className={s.inFlex}>
            <label>Номер карты получателя</label>
            <input
              required
              type="number"
              placeholder="0000 0000 0000 0000 "
              value={cardRecipient}
              onChange={(e) => setCardRecipient(e.target.value)}
            />
          </div>
          <button type="submit">Перевести</button>
        </div>
      </form>
    </div>
  );
}

export default Transfer;