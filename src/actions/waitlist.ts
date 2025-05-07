import { WaitlistData } from "@/schema/schema";
import { createClient } from '@/utils/supabase/client'

export const sendWaitlistData = async (data: WaitlistData) => {
    const supabase = createClient();
    try {
        console.log(data)
        const { error } = await supabase.from('waitlist').insert( data );
        if (error) throw error;
        else return true;
    } catch (error) {
        console.log(error);
    }
}