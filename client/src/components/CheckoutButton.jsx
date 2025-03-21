const CheckoutButton = () => {
    const handleClick = async () => {
      try {
        const res = await fetch('https://dein-backend-url.com/create-checkout-session', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
        });
  
        const data = await res.json();
        window.location.href = data.url;
      } catch (error) {
        console.error("Checkout fehlgeschlagen", error);
      }
    };
  
    return (
      <button onClick={handleClick} className="kaufen-btn">
        Jetzt kaufen – 29 €
      </button>
    );
  };
  
  export default CheckoutButton;
  