import { createClient } from "@supabase/supabase-js";

// Initialize the Supabase client with environment variables
const supabase = createClient(
  `https://${process.env.REACT_APP_API}.supabase.co`,
  process.env.REACT_APP_PROJECT
);

// Asynchronous function to check the validity of a ticket
async function checkTicket(ticketCode) {
  try {
    // Execute a query on Supabase to find the corresponding ticket
    const { data } = await supabase
      .from("userdata")
      .select("*")
      .eq("ticketCode", ticketCode)
      .single(); // Use .single() to get a single result

    if (!data) {
      // If the ticket is not found, display an alert message
      alert("Ticket not found");
    } else if (data.used) {
      // If the ticket has already been used, display an alert message
      document.getElementById('e').style.display = 'block';
      document.getElementById('s').style.display = 'none';
    } else {
      // Mark the ticket as used and display a success message
      await setUsedTicket(ticketCode);
      document.getElementById('s').style.display = 'block';
      document.getElementById('e').style.display = 'none';
    }
  } catch (error) {
    // Handle any errors and display a generic error message to the user
    console.error("Error:", error.message);
    alert("An error occurred. Please try again later.");
  }
}

// Asynchronous function to mark a ticket as used
async function setUsedTicket(ticketCode) {
  await supabase.from("userdata").update({ used: true }).eq("ticketCode", ticketCode);
}

export default checkTicket;
