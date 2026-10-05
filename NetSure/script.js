const SUPABASE_URL =
    "https://gibtugaczccgukalhjrf.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
    "sb_publishable_jaUvVRB8RhsRxrnoRpFfng_9D2zabYr";

const supabaseClient =
    window.supabase.createClient(
        SUPABASE_URL,
        SUPABASE_PUBLISHABLE_KEY
    );


// ======================================
// CHANGED: Added "email" here
// ======================================

async function logLoginAttempt(email) {

    const { data, error } = await supabaseClient
        .from("login_attempts")
        .insert({

            // ======================================
            // CHANGED: Save the email
            // ======================================
            email: email,

            event_type: "login_attempt",
            page: "login"

        })
        .select();

    if (error) {
        console.error("Database error message:", error.message);
        console.error("Database error code:", error.code);
        console.error("Database error details:", error.details);
        console.error("Database error hint:", error.hint);
        return false;
    }

    console.log("Login attempt saved:", data);
    return true;
}


async function goToLogin() {
    window.location.href = "login.html";
}
