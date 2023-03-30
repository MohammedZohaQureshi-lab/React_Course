import { useEffect, useRef } from 'react';
import { useFetcher } from 'react-router-dom';
import classes from './NewsletterSignup.module.css';

function NewsletterSignup() {
  const fetcher = useFetcher();
  const { data, state } = fetcher;
  const dataRef = useRef();
  useEffect(() => {
    if (state === 'idle' && data && data.message) {
      window.alert(data.message);
      dataRef.current.value=""
    }
  }, [data, state])

  return (
    <fetcher.Form method="post" action='/newsletter' className={classes.newsletter}>
      <input
        type="email"
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
        defaultValue=''
        ref={dataRef}
      />
      <button>Sign up</button>
    </fetcher.Form>
  );
}

export default NewsletterSignup;