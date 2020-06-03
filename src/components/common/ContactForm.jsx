import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Button from './Button';
import Title from './Title';
import Icon from './icons/Icon';
import TextLink from './TextLink';

import css from './ContactForm.module.scss';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isConfirm: false,
      hasError: false,
      name: '',
      nameError: undefined,
      companyName: '',
      email: '',
      emailError: undefined,
      emailConfirmation: '',
      emailConfirmationError: undefined,
      emailMatchError: undefined,
      phoneNumber: '',
      job: '',
      message: '',
      messageError: undefined,
    };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeCompanyName = this.handleChangeCompanyName.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeEmailConfirmation = this.handleChangeEmailConfirmation.bind(
      this,
    );
    this.handleChangePhoneNumber = this.handleChangePhoneNumber.bind(this);
    this.handleChangeJob = this.handleChangeJob.bind(this);
    this.handleChangeMessage = this.handleChangeMessage.bind(this);
    this.handleValidation = this.handleValidation.bind(this);
    this.handleConfirmation = this.handleConfirmation.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  componentDidMount() {
    const { isRecruit } = this.props;
    const jobs = {
      FE: 'フロントエンドエンジニア',
      IA: 'IA / 情報設計者',
      UI: 'UIデザイナー',
    };
    this.setState({
      job: isRecruit === 'all' ? 'UIデザイナー' : jobs[isRecruit],
    });
  }

  handleChangeName(e) {
    this.setState({ name: e.currentTarget.value });
  }

  handleChangeCompanyName(e) {
    this.setState({ companyName: e.currentTarget.value });
  }

  handleChangeEmail(e) {
    this.setState({ email: e.currentTarget.value });
  }

  handleChangeEmailConfirmation(e) {
    this.setState({ emailConfirmation: e.currentTarget.value });
  }

  handleChangePhoneNumber(e) {
    this.setState({ phoneNumber: e.currentTarget.value });
  }

  handleChangeJob(e) {
    this.setState({ job: e.currentTarget.value });
  }

  handleChangeMessage(e) {
    this.setState({ message: e.currentTarget.value });
  }

  // TODO: Probably need polyfill for IE
  async handleConfirmation(isConfirm) {
    await this.handleValidation();

    const { hasError } = this.state;
    if (hasError) {
      return;
    }

    this.setState({ isConfirm });
  }

  handleValidation() {
    const { isRecruit } = this.props;
    const { name, email, emailConfirmation, message } = this.state;

    const nameError = !name ? 'お名前を入力してください' : undefined;

    const emailError = !email ? 'メールアドレスを入力してください' : undefined;

    const emailConfirmationError = !emailConfirmation
      ? 'メールアドレス確認用を入力してください'
      : undefined;

    const emailMatchError =
      email !== emailConfirmation ? 'メールアドレスが一致しません' : undefined;

    const messageError =
      !message &&
      (isRecruit
        ? '必要書類が参照可能なURLを入力してください'
        : 'お問い合わせ内容を入力してください');

    const hasError =
      nameError ||
      emailError ||
      emailConfirmationError ||
      emailMatchError ||
      messageError;

    this.setState({
      hasError,
      nameError,
      emailError,
      emailConfirmationError,
      emailMatchError,
      messageError,
    });
  }

  handleReset() {
    const { isRecruit } = this.props;
    const jobs = {
      FE: 'フロントエンドエンジニア',
      IA: 'IA / 情報設計者',
      UI: 'UIデザイナー',
    };
    this.setState({
      hasError: false,
      name: '',
      companyName: '',
      email: '',
      emailConfirmation: '',
      phoneNumber: '',
      job: isRecruit === 'all' ? 'UIデザイナー' : jobs[isRecruit],
      message: '',
    });
  }

  render() {
    const { className, action, formName, isRecruit, withTitle } = this.props;
    const classes = classNames(css.ContactForm, className);
    const listClasses = classNames(css.ContactForm__List, 'List');
    const {
      isConfirm,
      hasError,
      name,
      nameError,
      companyName,
      email,
      emailError,
      emailConfirmation,
      emailConfirmationError,
      emailMatchError,
      phoneNumber,
      job,
      message,
      messageError,
    } = this.state;

    // Title
    return (
      <div className={classes}>
        {withTitle && (
          isConfirm ? (
            <Title className={css.ContactForm__Title}>応募内容の確認</Title>
          ) : (
            <Title className={css.ContactForm__Title}>
              {isRecruit ? <>求人専用応募フォーム</> : <>お問い合わせフォーム</>}
            </Title>
          )
        )}
        <form
          action={action}
          data-netlify="true"
          method="POST"
          name={formName}
          className={css.ContactForm__Form}
        >
          <input type="hidden" name="form-name" value={formName} />
          {isConfirm && (
            <>
              <input type="hidden" name="name" value={name} />
              {!isRecruit && <input type="hidden" name="company-name" value={companyName} />}
              <input type="hidden" name="email" value={email} />
              <input type="hidden" name="phone-number" value={phoneNumber} />
              {isRecruit && <input type="hidden" name="job" value={job} />}
              <input type="hidden" name="message" value={message} />
            </>
          )}

          <div className={css.ContactForm__Field}>
            <label htmlFor="name" className={css.ContactForm__Label}>
              お名前
              <strong className={css.ContactForm__Required}>必須</strong>
              <br />
              <input
                className={classNames(css.ContactForm__ShortInput, {
                  [css.isError]: nameError,
                })}
                type="text"
                name={isConfirm ? undefined : 'name'}
                id="name"
                onChange={this.handleChangeName}
                value={name}
                readOnly={isConfirm}
                required
              />
            </label>
            {nameError && <p className={css.ContactForm__Error}>{nameError}</p>}
          </div>
          {!isRecruit &&
            (isConfirm && !companyName ? null : (
              <div className={css.ContactForm__Field}>
                <label
                  htmlFor="company-name"
                  className={css.ContactForm__Label}
                >
                  会社名
                  <br />
                  <input
                    className={css.ContactForm__Input}
                    type="text"
                    name={isConfirm ? undefined : 'company-name'}
                    id="company-name"
                    onChange={this.handleChangeCompanyName}
                    value={companyName}
                    readOnly={isConfirm}
                  />
                </label>
              </div>
            ))}
          <div className={css.ContactForm__Field}>
            <label htmlFor="email" className={css.ContactForm__Label}>
              メールアドレス
              <strong className={css.ContactForm__Required}>必須</strong>
              <br />
              <input
                className={classNames(css.ContactForm__Input, {
                  [css.isError]: emailError,
                })}
                type="text"
                name={isConfirm ? undefined : 'email'}
                id="email"
                onChange={this.handleChangeEmail}
                value={email}
                readOnly={isConfirm}
                required
              />
            </label>
            {emailError && (
              <p className={css.ContactForm__Error}>{emailError}</p>
            )}
          </div>
          {!isConfirm && (
            <div className={css.ContactForm__Field}>
              <label
                htmlFor="email-confirmation"
                className={css.ContactForm__Label}
              >
                メールアドレス確認用
                <strong className={css.ContactForm__Required}>必須</strong>
                <br />
                <input
                  className={classNames(css.ContactForm__Input, {
                    [css.isError]: emailConfirmationError,
                  })}
                  type="text"
                  name={isConfirm ? undefined : 'email-confirmation'}
                  id="email-confirmation"
                  onChange={this.handleChangeEmailConfirmation}
                  value={emailConfirmation}
                  required
                />
              </label>
              {(emailConfirmationError || emailMatchError) && (
                <p className={css.ContactForm__Error}>
                  {emailConfirmationError || emailMatchError}
                </p>
              )}
            </div>
          )}
          {isConfirm && !phoneNumber ? null : (
            <div className={css.ContactForm__Field}>
              <label htmlFor="phone-number" className={css.ContactForm__Label}>
                電話番号
                <br />
                <input
                  className={css.ContactForm__ShortInput}
                  type="tel"
                  name={isConfirm ? undefined : 'phone-number'}
                  id="phone-number"
                  onChange={this.handleChangePhoneNumber}
                  value={phoneNumber}
                  readOnly={isConfirm}
                />
              </label>
            </div>
          )}
          {isRecruit &&
            (isConfirm || isRecruit !== 'all' ? (
              <dl className={css.ContactForm__Field}>
                <dt className={css.ContactForm__Label}>
                  応募職種
                  {isRecruit === 'all' && (
                    <strong className={css.ContactForm__Required}>必須</strong>
                  )}
                </dt>
                <dd className={css.ContactForm__Message}>{job}</dd>
              </dl>
            ) : (
              <div className={css.ContactForm__Field}>
                <label htmlFor="job" className={css.ContactForm__Label}>
                  応募職種
                  <strong className={css.ContactForm__Required}>必須</strong>
                  <div className={css.ContactForm__SelectContainer}>
                    <select
                      className={css.ContactForm__Select}
                      name="job"
                      id="job"
                      onChange={this.handleChangeJob}
                      value={job}
                    >
                      <option value="UIデザイナー">UIデザイナー</option>
                      <option value="フロントエンドエンジニア">
                        フロントエンドエンジニア
                      </option>
                      <option value="IA / 情報設計者">IA / 情報設計者</option>
                    </select>
                    <Icon
                      className={css.ContactForm__SelectIcon}
                      name="arrow-down"
                      aria-hidden="true"
                    />
                  </div>
                </label>
              </div>
            ))}
          {isConfirm ? (
            <dl className={css.ContactForm__Field}>
              <dt className={css.ContactForm__Label}>
                {isRecruit ? (
                  <>必要書類が参照可能なURL</>
                ) : (
                  <>お問い合わせ内容</>
                )}
                <strong className={css.ContactForm__Required}>必須</strong>
              </dt>
              <dd className={css.ContactForm__Message}>{message}</dd>
            </dl>
          ) : (
            <div className={css.ContactForm__Field}>
              <label htmlFor="message" className={css.ContactForm__Label}>
                {isRecruit ? (
                  <>必要書類が参照可能なURL</>
                ) : (
                  <>お問い合わせ内容</>
                )}
                <strong className={css.ContactForm__Required}>必須</strong>
                {isRecruit ? (
                  <ul className={listClasses}>
                    <li className="List__item">履歴書（フォーマット不問）</li>
                    <li className="List__item">職務経歴書</li>
                    <li className="List__item">
                      ポートフォリオ or 具体的に成果のわかるもの
                    </li>
                    <li className="List__item">
                      パスワードがかかっている場合はパスワード
                    </li>
                  </ul>
                ) : (
                  <br />
                )}
                <textarea
                  className={classNames(css.ContactForm__Textarea, {
                    [css.isError]: messageError,
                    [css.isConfirm]: isConfirm,
                  })}
                  name="message"
                  id="message"
                  onChange={this.handleChangeMessage}
                  value={message}
                />
              </label>
              {messageError && (
                <p className={css.ContactForm__Error}>{messageError}</p>
              )}
            </div>
          )}
          <p className={css.ContactForm__Privacy}>
            送信の前に
            <a href="/privacy/" target="_blank">
              プライバシーポリシー
            </a>
            をご確認ください。
          </p>
          {isConfirm ? (
            <div className={css.ContactForm__Buttons}>
              <TextLink
                className={css.ContactForm__CorrectButton}
                label="修正する"
                onClickLink={() => {
                  this.handleConfirmation(false);
                }}
                withIcon
                isLeft
              />
              <button className="Button" type="submit">
                {isRecruit ? <>応募内容を送信する</> : <>お問い合わせを送信する</>}
              </button>
            </div>
          ) : (
            <div className={css.ContactForm__Buttons}>
              <Button
                className={css.ContactForm__ConfirmButton}
                disabled={hasError}
                withIcon
                label={isRecruit ? "応募内容を確認する" : "お問い合わせ内容を確認する"}
                onClickButton={() => {
                  this.handleConfirmation(true);
                }}
              />
              <TextLink
                className={css.ContactForm__ResetButton}
                label="リセット"
                onClickLink={this.handleReset}
              />
            </div>
          )}
        </form>
      </div>
    );
  }
}

ContactForm.propTypes = {
  className: PropTypes.string,
  action: PropTypes.string.isRequired,
  formName: PropTypes.string.isRequired,
  isRecruit: PropTypes.string,
  withTitle: PropTypes.bool
};

ContactForm.defaultProps = {
  className: undefined,
  isRecruit: undefined,
  withTitle: false,
};

export default ContactForm;
