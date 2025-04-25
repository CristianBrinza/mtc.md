import Icon, { icons } from '../../components/Icon.tsx';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function IconShowcase() {

  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <>


        <h3>Icons Showcase</h3>

        <input
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            padding: '20px 0',
            justifyContent: 'flex-start',
          }}
        >
          {Object.keys(icons)
            .filter(iconKey =>
              iconKey.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .map(iconKey => (
              <div
                key={iconKey}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  width: '80px',
                  cursor: 'pointer',
                }}
                onClick={() => navigate(`/icon/${iconKey}`)}
              >
                <Icon type={iconKey as keyof typeof icons} size="40px" />
                <span
                  style={{ marginTop: '5px', fontSize: '12px', color: '#555' }}
                >
                  {iconKey}
                </span>
              </div>
            ))}
        </div>

    </>
  );
}
