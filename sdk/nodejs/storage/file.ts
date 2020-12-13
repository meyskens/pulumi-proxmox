// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

export class File extends pulumi.CustomResource {
    /**
     * Get an existing File resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: FileState, opts?: pulumi.CustomResourceOptions): File {
        return new File(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'proxmox:Storage/file:File';

    /**
     * Returns true if the given object is an instance of File.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is File {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === File.__pulumiType;
    }

    /**
     * The content type
     */
    public readonly contentType!: pulumi.Output<string | undefined>;
    /**
     * The datastore id
     */
    public readonly datastoreId!: pulumi.Output<string>;
    /**
     * The file modification date
     */
    public /*out*/ readonly fileModificationDate!: pulumi.Output<string>;
    /**
     * The file name
     */
    public /*out*/ readonly fileName!: pulumi.Output<string>;
    /**
     * The file size in bytes
     */
    public /*out*/ readonly fileSize!: pulumi.Output<number>;
    /**
     * The file tag
     */
    public /*out*/ readonly fileTag!: pulumi.Output<string>;
    /**
     * The node name
     */
    public readonly nodeName!: pulumi.Output<string>;
    /**
     * The source file
     */
    public readonly sourceFile!: pulumi.Output<outputs.Storage.FileSourceFile | undefined>;
    /**
     * The raw source
     */
    public readonly sourceRaw!: pulumi.Output<outputs.Storage.FileSourceRaw | undefined>;

    /**
     * Create a File resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FileArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: FileArgs | FileState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as FileState | undefined;
            inputs["contentType"] = state ? state.contentType : undefined;
            inputs["datastoreId"] = state ? state.datastoreId : undefined;
            inputs["fileModificationDate"] = state ? state.fileModificationDate : undefined;
            inputs["fileName"] = state ? state.fileName : undefined;
            inputs["fileSize"] = state ? state.fileSize : undefined;
            inputs["fileTag"] = state ? state.fileTag : undefined;
            inputs["nodeName"] = state ? state.nodeName : undefined;
            inputs["sourceFile"] = state ? state.sourceFile : undefined;
            inputs["sourceRaw"] = state ? state.sourceRaw : undefined;
        } else {
            const args = argsOrState as FileArgs | undefined;
            if (!args || args.datastoreId === undefined) {
                throw new Error("Missing required property 'datastoreId'");
            }
            if (!args || args.nodeName === undefined) {
                throw new Error("Missing required property 'nodeName'");
            }
            inputs["contentType"] = args ? args.contentType : undefined;
            inputs["datastoreId"] = args ? args.datastoreId : undefined;
            inputs["nodeName"] = args ? args.nodeName : undefined;
            inputs["sourceFile"] = args ? args.sourceFile : undefined;
            inputs["sourceRaw"] = args ? args.sourceRaw : undefined;
            inputs["fileModificationDate"] = undefined /*out*/;
            inputs["fileName"] = undefined /*out*/;
            inputs["fileSize"] = undefined /*out*/;
            inputs["fileTag"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(File.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering File resources.
 */
export interface FileState {
    /**
     * The content type
     */
    readonly contentType?: pulumi.Input<string>;
    /**
     * The datastore id
     */
    readonly datastoreId?: pulumi.Input<string>;
    /**
     * The file modification date
     */
    readonly fileModificationDate?: pulumi.Input<string>;
    /**
     * The file name
     */
    readonly fileName?: pulumi.Input<string>;
    /**
     * The file size in bytes
     */
    readonly fileSize?: pulumi.Input<number>;
    /**
     * The file tag
     */
    readonly fileTag?: pulumi.Input<string>;
    /**
     * The node name
     */
    readonly nodeName?: pulumi.Input<string>;
    /**
     * The source file
     */
    readonly sourceFile?: pulumi.Input<inputs.Storage.FileSourceFile>;
    /**
     * The raw source
     */
    readonly sourceRaw?: pulumi.Input<inputs.Storage.FileSourceRaw>;
}

/**
 * The set of arguments for constructing a File resource.
 */
export interface FileArgs {
    /**
     * The content type
     */
    readonly contentType?: pulumi.Input<string>;
    /**
     * The datastore id
     */
    readonly datastoreId: pulumi.Input<string>;
    /**
     * The node name
     */
    readonly nodeName: pulumi.Input<string>;
    /**
     * The source file
     */
    readonly sourceFile?: pulumi.Input<inputs.Storage.FileSourceFile>;
    /**
     * The raw source
     */
    readonly sourceRaw?: pulumi.Input<inputs.Storage.FileSourceRaw>;
}
