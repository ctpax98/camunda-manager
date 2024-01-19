/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type FetchExternalTaskTopicDto = {
    /**
     * **Mandatory.** The topic's name.
     */
    topicName: string;
    /**
     * **Mandatory.** The duration to lock the external tasks for in milliseconds.
     */
    lockDuration: number | null;
    /**
     * A JSON array of `String` values that represent variable names. For each result task belonging to this
     * topic, the given variables are returned as well if they are accessible from the external task's
     * execution. If not provided - all variables will be fetched.
     */
    variables?: Array<string>;
    /**
     * If `true` only local variables will be fetched.
     */
    localVariables?: boolean | null;
    /**
     * A `String` value which enables the filtering of tasks based on process instance business key.
     */
    businessKey?: string;
    /**
     * Filter tasks based on process definition id.
     */
    processDefinitionId?: string;
    /**
     * Filter tasks based on process definition ids.
     */
    processDefinitionIdIn?: Array<string>;
    /**
     * Filter tasks based on process definition key.
     */
    processDefinitionKey?: string;
    /**
     * Filter tasks based on process definition keys.
     */
    processDefinitionKeyIn?: Array<string>;
    /**
     * Filter tasks based on process definition version tag.
     */
    processDefinitionVersionTag?: string;
    /**
     * Filter tasks without tenant id.
     */
    withoutTenantId?: boolean | null;
    /**
     * Filter tasks based on tenant ids.
     */
    tenantIdIn?: Array<string>;
    /**
     * A `JSON` object used for filtering tasks based on process instance variable values. A property name of
     * the object represents a process variable name, while the property value represents the process variable
     * value to filter tasks by.
     */
    processVariables?: Record<string, any>;
    /**
     * Determines whether serializable variable values (typically variables that store custom Java objects)
     * should be deserialized on server side (default `false`).
     *
     * If set to `true`, a serializable variable will be deserialized on server side and transformed to JSON
     * using [Jackson's](https://github.com/FasterXML/jackson) POJO/bean property introspection feature. Note
     * that this requires the Java classes of the variable value to be on the REST API's classpath.
     *
     * If set to `false`, a serializable variable will be returned in its serialized format. For example, a
     * variable that is serialized as XML will be returned as a JSON string containing XML.
     */
    deserializeValues?: boolean | null;
    /**
     * Determines whether custom extension properties defined in the BPMN activity of the external task (e.g.
     * via the Extensions tab in the Camunda modeler) should be included in the response. Default: false
     */
    includeExtensionProperties?: boolean | null;
};

