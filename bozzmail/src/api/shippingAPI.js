import apiCall from './axios';

// Shipment APIs
export const createShipment = (service, data) => {
    return apiCall(`/shipments/${service}/create-new`, data, 'POST');
};

export const getShipmentRates = (service, data) => {
    return apiCall(`/shipments/${service}/get-rates`, data, 'POST');
};

export const purchaseShipment = (service, data) => {
    return apiCall(`/shipments/${service}/purchase`, data, 'POST');
};

export const trackShipment = (service, data) => {
    return apiCall(`/shipments/${service}/trackShipment`, data, 'POST');
};

export const trackShipmentByNumber = (service, trackNumber) => {
    return apiCall(`/shipments/${service}/trackShipment/${trackNumber}`, {}, 'GET');
};

export const getUserShipments = (page = 1, limit = 10) => {
    return apiCall('/shipments/getUserShippment', { page, limit }, 'GET');
};

export const getShipmentById = (shipmentId) => {
    return apiCall(`/shipments/getShipment/${shipmentId}`, {}, 'GET');
};

// Batch Shipment APIs
export const createBatchShipment = (service, data) => {
    return apiCall(`/batch/${service}/create-new`, data, 'POST');
};

export const getUserBatches = () => {
    return apiCall('/batch', {}, 'GET');
};

// Address APIs
export const getUserAddresses = () => {
    return apiCall('/address/user', {}, 'GET');
};

export const createAddress = (data) => {
    return apiCall('/address/user', data, 'POST');
};

export const getAddressById = (id) => {
    return apiCall(`/address/${id}`, {}, 'GET');
};

export const updateAddress = (id, data) => {
    return apiCall(`/address/${id}/update`, data, 'POST');
};

export const deleteAddress = (id) => {
    return apiCall(`/address/${id}`, {}, 'DELETE');
};

export const verifyAddress = (data) => {
    return apiCall('/address/verify', data, 'POST');
};

export const importAddresses = (file) => {
    const formData = new FormData();
    formData.append('file', file);
    return apiCall('/address/import', formData, 'POST', {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
};

// Customs APIs
export const getUserCustoms = () => {
    return apiCall('/customs', {}, 'GET');
};

export const createCustoms = (service, data) => {
    return apiCall(`/customs/${service}/create-new`, data, 'POST');
};

export const updateCustoms = (customId, data) => {
    return apiCall(`/customs/${customId}/edit`, data, 'POST');
};

export const deleteCustoms = (customId) => {
    return apiCall(`/customs/${customId}/delete`, {}, 'DELETE');
}; 