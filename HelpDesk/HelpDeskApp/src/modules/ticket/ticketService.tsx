import authAxios from 'src/modules/shared/axios/authAxios';
import AuthCurrentTenant from 'src/modules/auth/authCurrentTenant';
import AWS from 'aws-sdk';

export default class TicketService {
  static async update(id, data) {
    const body = {
      id,
      data,
    };

    const tenantId = AuthCurrentTenant.get();

    const response = await authAxios.put(
      `/tenant/${tenantId}/ticket/${id}`,
      body,
    );

    return response.data;
  }

  static async destroyAll(ids) {
    const params = {
      ids,
    };

    const tenantId = AuthCurrentTenant.get();

    const response = await authAxios.delete(
      `/tenant/${tenantId}/ticket`,
      {
        params,
      },
    );

    return response.data;
  }

  static async create(data) {
    const body = {
      data,
    };

    const tenantId = AuthCurrentTenant.get();

    const response = await authAxios.post(
      `/tenant/${tenantId}/ticket`,
      body,
    );

    //  ttt: publish to SNS Topic
    TicketService.publishCreateTicketMsgToSNS(data);

    return response.data;
  }

  static async import(values, importHash) {
    const body = {
      data: values,
      importHash,
    };

    const tenantId = AuthCurrentTenant.get();

    const response = await authAxios.post(
      `/tenant/${tenantId}/ticket/import`,
      body,
    );

    return response.data;
  }

  static async find(id) {
    const tenantId = AuthCurrentTenant.get();

    const response = await authAxios.get(
      `/tenant/${tenantId}/ticket/${id}`,
    );

    return response.data;
  }

  static async list(filter, orderBy, limit, offset) {
    const params = {
      filter,
      orderBy,
      limit,
      offset,
    };

    const tenantId = AuthCurrentTenant.get();

    const response = await authAxios.get(
      `/tenant/${tenantId}/ticket`,
      {
        params,
      },
    );

    return response.data;
  }

  static async listAutocomplete(query, limit) {
    const params = {
      query,
      limit,
    };

    const tenantId = AuthCurrentTenant.get();

    const response = await authAxios.get(
      `/tenant/${tenantId}/ticket/autocomplete`,
      {
        params,
      },
    );

    return response.data;
  }

  static publishCreateTicketMsgToSNS(data: any) {
    const options = {
      accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
      secretAccessKey:
        process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
      region: 'us-east-1',
    };
    AWS.config.update(options);
    console.log('ttt data', data);
    // Create publish parameters
    var params = {
      Message: data.title,
      TopicArn:
        'arn:aws:sns:us-east-1:741543764817:trigger-create-ticket',
    };

    // Create promise and SNS service object
    var publishTextPromise = new AWS.SNS({
      apiVersion: '2010-03-31',
    })
      .publish(params)
      .promise();

    // Handle promise's fulfilled/rejected states
    publishTextPromise
      .then(function (data) {
        console.log(
          `Message ${params.Message} sent to the topic ${params.TopicArn}`,
        );
        console.log('MessageID is ' + data.MessageId);
      })
      .catch(function (err) {
        console.error(err, err.stack);
      });
  }
}
