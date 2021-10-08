# Basic SOAP API

SOAP (Simple Object Access Protocol) is a messaging protocol spec for exchanging structured information across web services. It is largely been replaced by REST but decided just to track our web roots back to the not so simpler times.

## Differences from REST

- SOAP is stateless by default, but it is possible to make the SOAP API stateful
- Can't cache API calls
- Built-in WS security with SSL support (REST adds it on if you want to use it)
- Requires more bandwidth and computing power
- Only XML (REST supports plain text, XML, JSON, YAML and more)
- Works with several transfer protocols like HTTP, SMTP, UDP and more (REST is only over HTTP)
- SOAP is recommended for enterprise, high-security, distributed applications, financial services, payment gateways, telecommunication services
- More difficult to implement relative to SOAP

## When to use SOAP

When there is a need for:

- Asynchronous processing and subsequent invocation (guaranteed levels of reliability and security)
- A formal means of communication
- Stateful operations (maintaining state from one request to another)

## Characteristic stuff in SOAP (challenges)

- WSDL file (contract file between client and server - strict)
- Document size (the messages are large so using SOAP in a bad bandwidth environment may cause bad application latency)
