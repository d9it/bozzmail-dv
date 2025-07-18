# Subscription API Documentation

## Overview
The Subscription API provides endpoints for managing user subscription plans, billing cycles, and subscription status. All endpoints require authentication via JWT token.

## Base URL
```
{{base_url}}/subscriptions
```

## Authentication
All subscription endpoints require a valid JWT token in the request header:
```
token: {{token}}
```

## Endpoints

### 1. Get Current Subscription
**GET** `/subscriptions/current`

Retrieves the current user's subscription information.

**Headers:**
```
token: {{token}}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "plan": "starter",
    "status": "active",
    "currentPeriodEnd": "2024-02-15T10:30:00.000Z",
    "billingCycle": "monthly",
    "features": [
      "Create and print shipping labels",
      "Send letters and postcards (pay per piece sent)",
      "Store up to 10 contacts",
      "Limited support",
      "No API access",
      "Standard shipping rates",
      "No access to the Partner Program",
      "Manual one-by-one shipping & mailing only",
      "No batch import tools"
    ],
    "included": [0, 1, 2],
    "excluded": [3, 4, 5, 6, 7, 8],
    "maxContacts": 10,
    "price": {
      "monthly": 0,
      "yearly": 0
    }
  }
}
```

### 2. Get Subscription Plans
**GET** `/subscriptions/plans`

Retrieves all available subscription plans.

**Headers:**
```
token: {{token}}
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "starter",
      "name": "Starter",
      "description": "Hobbyists, testers, and new users",
      "price": {
        "monthly": 0,
        "yearly": 0
      },
      "features": [
        "Create and print shipping labels",
        "Send letters and postcards (pay per piece sent)",
        "Store up to 10 contacts",
        "Limited support",
        "No API access",
        "Standard shipping rates",
        "No access to the Partner Program",
        "Manual one-by-one shipping & mailing only",
        "No batch import tools"
      ],
      "included": [0, 1, 2],
      "excluded": [3, 4, 5, 6, 7, 8],
      "maxContacts": 10
    },
    {
      "id": "growth",
      "name": "Growth",
      "description": "Freelancers and side businesses",
      "price": {
        "monthly": 19,
        "yearly": 182.4
      },
      "features": [
        "Create and print shipping labels",
        "Send letters and postcards (pay per piece sent)",
        "Store up to 50 contacts",
        "Priority support",
        "Full API access",
        "Access to discounted shipping rates",
        "Access to the Partner Program",
        "Manual one-by-one shipping & mailing only",
        "No batch import tools"
      ],
      "included": [0, 1, 2, 3, 4, 5, 6],
      "excluded": [7, 8],
      "maxContacts": 50
    },
    {
      "id": "professional",
      "name": "Professional",
      "description": "Teams and growing businesses",
      "price": {
        "monthly": 49,
        "yearly": 470.4
      },
      "features": [
        "Create and print shipping labels",
        "Send letters and postcards (pay per piece sent)",
        "Store unlimited contacts",
        "Priority support",
        "Full API access",
        "Access to discounted shipping rates",
        "Access to the Partner Program",
        "Batch shipping & mailing tools",
        "Import/export for contacts/campaigns"
      ],
      "included": [0, 1, 2, 3, 4, 5, 6, 7, 8],
      "excluded": [],
      "maxContacts": -1
    }
  ]
}
```

### 3. Upgrade Subscription
**POST** `/subscriptions/upgrade`

Upgrades the user's subscription to a new plan.

**Headers:**
```
token: {{token}}
Content-Type: application/json
```

**Request Body:**
```json
{
  "planId": "growth",
  "billingCycle": "monthly"
}
```

**Parameters:**
- `planId` (required): The plan ID to upgrade to (`starter`, `growth`, `professional`)
- `billingCycle` (optional): Billing cycle (`monthly` or `yearly`). Defaults to `monthly`

**Response:**
```json
{
  "success": true,
  "data": {
    "message": "Successfully upgraded to Growth plan",
    "plan": "growth",
    "billingCycle": "monthly",
    "status": "active"
  }
}
```

### 4. Cancel Subscription
**POST** `/subscriptions/cancel`

Cancels the user's current subscription.

**Headers:**
```
token: {{token}}
Content-Type: application/json
```

**Request Body:**
```json
{}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "message": "Subscription cancelled successfully",
    "status": "cancelled"
  }
}
```

### 5. Get Billing Cycle
**GET** `/subscriptions/billing-cycle`

Retrieves the current billing cycle information.

**Headers:**
```
token: {{token}}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "billingCycle": "monthly",
    "plan": "starter",
    "price": {
      "monthly": 0,
      "yearly": 0
    }
  }
}
```

### 6. Get Renewal Date
**GET** `/subscriptions/renewal-date`

Retrieves the next renewal date for the subscription.

**Headers:**
```
token: {{token}}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "renewalDate": "2024-02-15T10:30:00.000Z",
    "billingCycle": "monthly",
    "status": "active"
  }
}
```

## Error Responses

### 400 Bad Request
```json
{
  "message": "Plan ID is required"
}
```

### 401 Unauthorized
```json
{
  "message": "Token is required"
}
```

### 404 Not Found
```json
{
  "message": "User not found"
}
```

### 500 Internal Server Error
```json
{
  "message": "Failed to fetch current subscription",
  "error": "Error details"
}
```

## Subscription Plans

### Starter Plan
- **Price:** Free
- **Max Contacts:** 10
- **Features:** Basic shipping and mailing functionality
- **Support:** Limited support

### Growth Plan
- **Price:** $19/month or $182.4/year
- **Max Contacts:** 50
- **Features:** Full API access, priority support, discounted rates
- **Support:** Priority support

### Professional Plan
- **Price:** $49/month or $470.4/year
- **Max Contacts:** Unlimited
- **Features:** All features including batch tools and import/export
- **Support:** Priority support

## Testing in Postman

1. **Import the Collection:** Import the `bozzmail.postman_collection.json` file into Postman
2. **Set Environment Variables:**
   - `base_url`: Your backend server URL (e.g., `http://localhost:3001`)
   - `token`: JWT token from authentication
3. **Test Authentication:** First run the authentication endpoints to get a valid token
4. **Test Subscription Endpoints:** Use the subscription endpoints in the collection

## Notes

- All subscription data is currently stored in the user model
- Mock data is used for demonstration purposes
- In production, integrate with a real payment processor
- Consider implementing webhook handling for subscription events
- Add usage tracking for plan limits 