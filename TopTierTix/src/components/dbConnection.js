import { createClient } from "@supabase/supabase-js";

const supabase = createClient('https://'+process.env.REACT_APP_API+'.supabase.co', process.env.REACT_APP_PROJECT);

async function checkTicket(hashedTicket) {
    const { data, error } = await supabase.from('userdata').select('*').eq('hash', hashedTicket);
    if (error) {
        alert(error.message);
    } else {
        if (data.length === 0) {
            alert('Ticket not found');
        } else {
            if (data[0].used === true) {
                alert('Ticket already used');
            } else {
                await setUsedTicket(hashedTicket);
                alert('Ticket used');
            }
        }
    }
}

async function setUsedTicket(hashedTicket) {
     await supabase.from('userdata').update({ used: true }).eq('hash', hashedTicket);
}; 

export default checkTicket;