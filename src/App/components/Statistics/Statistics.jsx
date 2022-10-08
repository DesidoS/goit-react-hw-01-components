import PropTypes from 'prop-types';
import { Title, StatList, Item, Span } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <>
      {title && <Title>{title}</Title>}
      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <Item
            style={{
              backgroundColor: `#${Math.floor(Math.random() * 16777215)
                .toString(16)
                .padStart(6, 0)}`,
            }}
            key={id}
          >
            <Span>{label}</Span>
            <Span>{percentage}</Span>
          </Item>
        ))}
      </StatList>
    </>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
