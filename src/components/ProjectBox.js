export default function ProjectBox(props) {
  const api = props.api;
  return (
    <div
      onClick={() => props.handleOpen(api)}
      className={`project_block ${api.labelClass ? api.labelClass : ''}`}
    >
      {api.labelClass && (
        <div className='new_img'>
          <img src={api.label} alt='new_img' />
        </div>
      )}

      <h3 className='project_title'>{api.name}</h3>
      <p>
        <strong>{api.desc}</strong>
      </p>
      <img className='project_img' src={api.img} alt='project look' />
      <div className='languages'>
        <div className='skill-bar'>
          {api?.languages.map((lng, index) => (
            <div
              key={index}
              className={lng.name}
              style={{ width: lng.width }}
            ></div>
          ))}
        </div>
        <div className='details'>
          <ul>
            {api?.languages.map((lng, index) => (
              <li key={index}>
                <div className={lng.name}></div>
                {lng.summary}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
