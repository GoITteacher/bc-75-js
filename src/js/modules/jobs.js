const refs = {
  formEl: document.querySelector('.js-jobs-form'),
  container: document.querySelector('.js-jobs-list'),
};

//!======================================================

function searchJobs(query) {
  const BASE_URL = 'https://jsearch.p.rapidapi.com';
  const END_POINT = '/search';

  const params = new URLSearchParams({
    query: query,
    country: 'us',
  });

  const url = `${BASE_URL}${END_POINT}?${params}`;

  const headers = {
    'x-rapidapi-key': '9b3ff61931msh1b42d77d34e33dap1c29cajsn3d3169e0e2f4',
    'x-rapidapi-host': 'jsearch.p.rapidapi.com',
  };

  return fetch(url, { headers }).then(res => res.json());
}
//!======================================================
function jobTemplate(job = {}) {
  return `<li class="job-card">
      <div class="job-header">
        <img
          src="${job.employer_logo || ''}"
          alt="${job.employer_name} logo"
          class="employer-logo"
        />
        <div class="job-meta">
          <h3 class="job-title">${job.job_title}</h3>
          <p class="employer-name">${job.employer_name}</p>
          <a
            href="${job.employer_website || '#'}"
            target="_blank"
            class="employer-website"
          >${job.employer_website || ''}</a>
        </div>
      </div>
  
      <div class="job-details">
        <p class="job-location"><strong>Location:</strong> ${job.job_city}, ${
    job.job_state
  }, ${job.job_country}</p>
        <p class="job-type"><strong>Employment:</strong> ${
          job.job_employment_type
        }</p>
        <p class="job-salary">
          <strong>Salary:</strong> $${job.job_min_salary?.toLocaleString()} – $${job.job_max_salary?.toLocaleString()} / ${job.job_salary_period?.toLowerCase()}
        </p>
        <p class="job-posted"><strong>Posted:</strong> ${job.job_posted_at}</p>
      </div>
  
      <div class="job-description">
        <p>
          <strong>Overview:</strong> ${
            job.job_highlights?.Responsibilities?.[0] ||
            'No description provided.'
          }
        </p>
        <p>
          <strong>Key Tech:</strong> ${
            job.job_highlights?.Qualifications?.filter(
              q =>
                q.toLowerCase().includes('react') ||
                q.toLowerCase().includes('docker') ||
                q.toLowerCase().includes('git'),
            )?.join(', ') || 'N/A'
          }
        </p>
        <p>
          <strong>Security:</strong> ${
            job.job_highlights?.Qualifications?.find(q =>
              q.toLowerCase().includes('security clearance'),
            ) || 'Not specified'
          }
        </p>
      </div>
  
      <div class="job-actions">
        ${job.apply_options
          .map(
            option => `
          <a
            href="${option.apply_link}"
            target="_blank"
            class="apply-link ${option.is_direct ? 'direct' : 'external'}"
          >${option.publisher}${option.is_direct ? ' (Direct)' : ''}</a>
        `,
          )
          .join('')}
      </div>
    </li>`;
}

function jobsTemplate(jobs) {
  return jobs.map(jobTemplate).join('\n');
}
//!======================================================

refs.formEl.addEventListener('submit', e => {
  e.preventDefault();

  const query = e.target.elements.query.value;

  searchJobs(query)
    .then(res => {
      const markup = jobsTemplate(res.data);
      refs.container.innerHTML = markup;
    })
    .catch(err => {
      console.log(err);
    });
});
