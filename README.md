# CPEZ API

CPEZ API is a lightweight web-based project designed to control real hardware in a building environment. The initial use case is a physical LED that can be activated or deactivated through HTTP requests, enabling simple automation and remote control scenarios.

This project is intended to serve as a practical example of integrating web interfaces, an API layer, and real-world hardware control.

## Overview

The repository combines a web frontend and an API-oriented backend pattern to control physical devices through requests such as POST operations. In its core example, the system can turn a real LED on or off via a REST-style endpoint.

The goal is to provide a simple and educational foundation for:

- Remote control of physical devices
- Hardware automation experiments
- Building or facility prototypes
- Learning API-to-hardware integration

## Features

- Simple HTTP interface for hardware control
- Support for real-world LED control
- Minimal and accessible codebase for learning and extension
- Suitable for prototypes, demos, and small automation systems
- Easy to adapt to additional sensors or actuators

## Project Structure

```text
.
├── README.md
├── LICENSE
├── index.html
├── context/
├── wwwroot/
└── ...
```

## Requirements

Before running the project, make sure you have the following:

- A modern web browser
- A local development environment capable of serving the project
- Python, .NET, or another runtime depending on the actual backend implementation in use
- A physical LED or compatible hardware module if testing with real device control

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/AeroScript-DYGM/cpez-api-python-backend.git
   cd cpez-api-python-backend
   ```

2. Start the application using the appropriate runtime or local server command for your setup.

3. Open the application in a browser or send HTTP requests to the endpoint used by the project.

## Configuration

Depending on the implementation, you may need to configure:

- Host and port values
- GPIO or hardware access settings
- API routes or device identifiers
- Environment variables for local development

Review the code and configuration files to ensure that the application points to the correct hardware interface and network settings.

## Usage

Once the application is running, you can interact with the control interface or send HTTP requests.

Example request to turn on an LED:

```bash
curl -X POST http://localhost:8000/led \
  -H "Content-Type: application/json" \
  -d '{"state":"on"}'
```

Example request to turn off an LED:

```bash
curl -X POST http://localhost:8000/led \
  -H "Content-Type: application/json" \
  -d '{"state":"off"}'
```

These examples are representative of the project concept and may vary slightly depending on the final implementation in the codebase.

## API Behavior

The API is intended to expose a simple and consistent interface for hardware state changes. Recommended behaviors include:

- 200 OK for successful device updates
- 400 Bad Request for invalid payloads
- 500 Internal Server Error for hardware or server failures
- JSON responses that clearly communicate the state or result

## Development Notes

This repository is well suited for educational and prototype work. It is intentionally simple so it can be extended with more features such as:

- Additional hardware outputs
- Sensor reading endpoints
- Authentication and authorization
- Device status monitoring
- Logging and telemetry

## Security and Safety

When working with physical hardware, always follow good safety practices:

- Use proper current protection and resistor sizing for LEDs
- Verify electrical wiring before powering the device
- Prefer safe prototyping setups during development
- Avoid direct control of high-voltage devices unless qualified and properly protected

## Contributing

Contributions are welcome. If you want to improve the project, consider the following:

- Open an issue to report a bug or suggest a feature
- Fork the repository and create a feature branch
- Submit a pull request with a clear explanation of the change
- Include documentation updates when behavior changes

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Author

Darick Gonzalez M

GitHub: https://github.com/AeroScript-DYGM

## Contact

For questions, improvements, or collaboration opportunities, please contact the author through the GitHub profile listed above or by opening an issue in this repository.
