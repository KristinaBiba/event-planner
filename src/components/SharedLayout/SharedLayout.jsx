import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import PropTypes from 'prop-types';
import { Slide, ToastContainer } from 'react-toastify';
import { Watch } from 'react-loader-spinner';

import { Container } from 'components/UI/Container/Container';

import { ReactComponent as Search } from '../../images/svg/search.svg';
import { ReactComponent as CrossSmall } from '../../images/svg/cross-small.svg';
import { ReactComponent as ChevronDownSmall } from '../../images/svg/chevron-down-small.svg';

import {
  Div,
  FilterInput,
  Header,
  InputDiv,
  LanguageSwitcher,
  SvgButtonCrossSmall,
  SvgDivSearch,
  Link,
  Wrap,
  LoaderWrap,
} from './SharedLayout_css';

export function SharedLayout({ value, onChange, onInputClean }) {
  return (
    <>
      <Header>
        <Container>
          <Wrap>
            <Link to="/" aria-label="Go to the main page">
              Event Planner
            </Link>
            <Div>
              <InputDiv>
                <SvgDivSearch>
                  <Search aria-label="Enter characters to search for" />
                </SvgDivSearch>

                <FilterInput
                  name="filter"
                  value={value}
                  onChange={onChange}
                  placeholder="Search by keywords"
                />

                {value && (
                  <SvgButtonCrossSmall
                    type="button"
                    onClick={onInputClean}
                    style={{ stroke: 'var(--primary-text-color)' }}
                  >
                    <CrossSmall aria-label="Clear recent searches" />
                  </SvgButtonCrossSmall>
                )}
              </InputDiv>

              <LanguageSwitcher
                type="button"
                style={{ stroke: 'var(--secondary-text-color)' }}
              >
                UK
                <ChevronDownSmall aria-label="Сhoose a language of the site" />
              </LanguageSwitcher>
            </Div>
          </Wrap>
        </Container>
      </Header>

      <Suspense
        fallback={
          <LoaderWrap>
            <Watch
              height="80"
              width="80"
              radius="48"
              color="var(--primary-text-color)"
              ariaLabel="Loading"
              visible={true}
            />
          </LoaderWrap>
        }
      >
        <Outlet />
      </Suspense>

      <ToastContainer
        transition={Slide}
        hideProgressBar={true}
        autoClose={3000}
      />
    </>
  );
}

SharedLayout.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onInputClean: PropTypes.func.isRequired,
};
