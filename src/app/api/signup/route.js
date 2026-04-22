export async function POST(req) {
  try {
    const body = await req.json();

    const { mobile_number, password, tnc_accepted } = body;

    let errors = {};

    // Mobile validation
    if (!mobile_number) {
      errors.mobile_number = ["The mobile number field is required."];
    } else if (!/^[0-9]{8,15}$/.test(mobile_number)) {
      errors.mobile_number = [
        "The mobile number must be between 8 and 15 digits."
      ];
    }

    // Password validation
    if (!password) {
      errors.password = ["The password field is required."];
    }

    // Terms validation
    if (!tnc_accepted) {
      errors.tnc_accepted = ["The tnc accepted field is required."];
    }

    // If errors → return 422
    if (Object.keys(errors).length > 0) {
      return Response.json(
        {
          error: {
            message: "422 Unprocessable Content",
            errors
          }
        },
        { status: 422 }
      );
    }

    // Success
    return Response.json(
      {
        message: "Signup successful"
      },
      { status: 200 }
    );

  } catch (err) {
    return Response.json(
      { message: "Server error" },
      { status: 500 }
    );
  }
}