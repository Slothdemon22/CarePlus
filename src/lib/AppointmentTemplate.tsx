import React from 'react';

// Main email template component for appointment confirmation
const AppointmentEmailTemplate = ({
  name,
  doctor,
  appointmentReason,
  dateTime,
}: {
  name: string;
  doctor: string;
  appointmentReason: string;
  dateTime: string;
}) => {
  return (
    <div>
      <table
        width="100%"
        style={{
          backgroundColor: '#f4f4f4',
          padding: '20px',
          fontFamily: '&apos;Arial&apos;, sans-serif',
        }}
        cellPadding={0}
        cellSpacing={0}
      >
        <tr>
          <td>
            <table
              style={{
                maxWidth: '600px',
                margin: '0 auto',
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              }}
              cellPadding={0}
              cellSpacing={0}
            >
              {/* Header Section */}
              <tr>
                <td
                  style={{
                    background: 'linear-gradient(90deg, #0c7b30, #1a923c)',
                    padding: '30px',
                    textAlign: 'center',
                    borderBottom: '4px solid #0c7b30',
                  }}
                >
                  <h1
                    style={{
                      color: '#ffffff',
                      fontSize: '36px',
                      margin: '0',
                      fontWeight: 'bold',
                      textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
                    }}
                  >
                    CarePlus
                  </h1>
                </td>
              </tr>

              {/* Body Section */}
              <tr>
                <td
                  style={{
                    padding: '30px 40px',
                    color: '#333333',
                  }}
                >
                  <h2
                    style={{
                      color: '#0c7b30',
                      fontSize: '28px',
                      marginBottom: '20px',
                      fontWeight: 'bold',
                    }}
                  >
                    Appointment Confirmation
                  </h2>

                  <p
                    style={{
                      fontSize: '18px',
                      lineHeight: '1.8',
                      marginBottom: '25px',
                    }}
                  >
                    Dear <strong>{name}</strong>,
                  </p>

                  <p
                    style={{
                      fontSize: '18px',
                      lineHeight: '1.8',
                      marginBottom: '25px',
                    }}
                  >
                    Your appointment with <strong>{doctor}</strong> has been scheduled successfully.
                  </p>

                  <p
                    style={{
                      fontSize: '18px',
                      lineHeight: '1.8',
                      marginBottom: '25px',
                    }}
                  >
                    <strong>Reason for Appointment:</strong> {appointmentReason}
                  </p>

                  <p
                    style={{
                      fontSize: '18px',
                      lineHeight: '1.8',
                      marginBottom: '25px',
                    }}
                  >
                    <strong>Date and Time:</strong> {dateTime}
                  </p>

                  <p
                    style={{
                      fontSize: '18px',
                      lineHeight: '1.8',
                      marginBottom: '25px',
                    }}
                  >
                    Thank you for choosing CarePlus! If you have any questions, feel free to contact us.
                  </p>

                  <div style={{ textAlign: 'center', margin: '30px 0' }}>
                    <a
                      href="https://careplus.com/dashboard"
                      style={{
                        backgroundColor: '#0c7b30',
                        color: '#ffffff',
                        padding: '15px 35px',
                        fontSize: '18px',
                        borderRadius: '8px',
                        textDecoration: 'none',
                        display: 'inline-block',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                        transition: 'background-color 0.3s ease',
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.backgroundColor = '#1a923c')
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.backgroundColor = '#0c7b30')
                      }
                    >
                      Go to Dashboard
                    </a>
                  </div>
                </td>
              </tr>

              {/* Footer Section */}
              <tr>
                <td
                  style={{
                    backgroundColor: '#333333',
                    padding: '20px',
                    textAlign: 'center',
                    borderTop: '4px solid #0c7b30',
                  }}
                >
                  <p
                    style={{
                      color: '#ffffff',
                      fontSize: '14px',
                      lineHeight: '1.5',
                      margin: '0',
                    }}
                  >
                    CarePlus Inc.<br />
                    123 Health Street, Wellness City<br />
                    <a
                      href="https://careplus.com"
                      style={{
                        color: '#0c7b30',
                        textDecoration: 'none',
                      }}
                    >
                      www.careplus.com
                    </a>
                    <br />
                    &copy; 2024 CarePlus. All rights reserved.
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default AppointmentEmailTemplate;
